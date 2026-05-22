// App.jsx — L&D consulting simulation: Cover → 5 Scenarios → Summary

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { SCENARIOS } from './scenarios.js';
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakToggle,
  TweakRadio,
} from './TweaksPanel.jsx';

// ──────────────────────────────────────────────────────────── tweaks defaults
const TWEAK_DEFAULTS = {
  facilitatorMode: false,
  paper: 'cream',
};

// ─────────────────────────────────────────────────────────── visual helpers
const VERDICT_META = {
  strongest: { tone: 'Strongest', chipLabel: 'Strongest response', swatch: 'var(--strong)' },
  partial: { tone: 'Partial', chipLabel: 'Partially effective', swatch: 'var(--partial)' },
  'order-taker': { tone: 'Risky', chipLabel: 'Risky · order-taker', swatch: 'var(--risky)' },
  over: { tone: 'Premature', chipLabel: 'Premature / too broad', swatch: 'var(--over)' },
};

function PhaseRail({ current, onJump }) {
  const phases = ['Analysis', 'Design', 'Develop', 'Implement', 'Evaluate'];
  return (
    <div className="phase-rail">
      {phases.map((p, i) => {
        const n = i + 1;
        const state = n < current ? 'done' : n === current ? 'active' : 'future';
        const clickable = !!onJump;
        const Node = clickable ? 'button' : 'div';
        return (
          <React.Fragment key={p}>
            <Node
              type={clickable ? 'button' : undefined}
              className={`phase-node phase-${state} ${clickable ? 'phase-node-btn' : ''}`}
              onClick={clickable ? () => onJump(i) : undefined}
            >
              <div className="phase-dot">
                <span className="phase-num">{String(n).padStart(2, '0')}</span>
              </div>
              <div className="phase-label">{p}</div>
            </Node>
            {i < phases.length - 1 && <div className={`phase-line line-${state}`} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ───────────────────────────────────────────────────────────────── COVER SCREEN
function Cover({ onBegin }) {
  return (
    <div className="cover">
      <div className="cover-grid">
        <div className="cover-left">
          <div className="kicker">
            <span className="kicker-dot" />
            <span>Learning &amp; Performance Consulting · Facilitation Simulation</span>
          </div>
          <h1 className="display">
            The Consultative<br />
            <em>Conversation.</em>
          </h1>
          <p className="lede">
            Five decisions across the lifecycle of a single training engagement. Read each
            situation, pick how you'd respond, and we'll talk about it.
          </p>

          <div className="brief">
            <div className="brief-row">
              <span className="brief-key">You play</span>
              <span className="brief-val">Sam Rivera · external L&amp;D consultant</span>
            </div>
            <div className="brief-row">
              <span className="brief-key">The client</span>
              <span className="brief-val">Logistics XYZ · 5S audit performance gap</span>
            </div>
            <div className="brief-row">
              <span className="brief-key">The arc</span>
              <span className="brief-val">Analysis → Design → Develop → Implement → Evaluate</span>
            </div>
            <div className="brief-row">
              <span className="brief-key">Time</span>
              <span className="brief-val">~25 min solo · 45–60 min with facilitator</span>
            </div>
          </div>

          <div className="cover-actions">
            <button className="btn btn-primary" onClick={onBegin}>
              Begin Scenario 1 →
            </button>
            <span className="cover-hint">5 scenarios · 4 responses each · no scoring</span>
          </div>
        </div>

        <div className="cover-right">
          <div className="cover-card">
            <div className="cover-card-head">
              <span className="mono small muted">// HOW THIS WORKS</span>
            </div>
            <ol className="howlist">
              <li>
                <span className="howlist-num">01</span>
                <div>
                  <strong>Read the situation.</strong> A short message from a client, a colleague,
                  or an SME.
                </div>
              </li>
              <li>
                <span className="howlist-num">02</span>
                <div>
                  <strong>Pick a response.</strong> Four are offered. Choose the one closest to
                  what you'd actually say.
                </div>
              </li>
              <li>
                <span className="howlist-num">03</span>
                <div>
                  <strong>See the feedback.</strong> A short note on each of the four options.
                </div>
              </li>
              <li>
                <span className="howlist-num">04</span>
                <div>
                  <strong>Discuss.</strong> Each scenario ends with a prompt for the room.
                </div>
              </li>
            </ol>
          </div>

          <div className="cover-foot mono small muted">
            // Calibrated for L&amp;D consultants, instructional designers, and
            performance-improvement practitioners.
          </div>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────── SCENARIO SCREEN
function ScenarioScreen({ scenario, index, total, onSubmit, facilitatorMode, onJumpPhase }) {
  const [picked, setPicked] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    setPicked(null);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [scenario.id]);

  return (
    <div className="scenario" ref={scrollRef}>
      <div className="scenario-head">
        <PhaseRail current={scenario.phaseNumber} onJump={onJumpPhase} />
        <div className="scenario-meta">
          <span className="mono small muted">
            // SCENARIO {String(index + 1).padStart(2, '0')} OF {String(total).padStart(2, '0')}
          </span>
          <span className="mono small muted">// PHASE · {scenario.phase.toUpperCase()}</span>
        </div>
      </div>

      <div className="scenario-grid">
        <section className="panel situation-panel">
          <header className="panel-head">
            <span className="panel-eyebrow">Situation</span>
            <h2 className="panel-title">{scenario.title}</h2>
            <p className="panel-summary">{scenario.summary}</p>
          </header>

          <div className="comm-card">
            <div className="comm-channel mono small">{scenario.channel}</div>
            <div className="comm-from">
              <div className="avatar">{scenario.from.initials}</div>
              <div>
                <div className="comm-name">{scenario.from.name}</div>
                <div className="comm-role">{scenario.from.role}</div>
              </div>
            </div>
            <div className="comm-body">
              {scenario.message.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="situation-footnote">
            <span className="mono small muted">// PROMPT</span>
            <p>{scenario.prompt}</p>
          </div>
        </section>

        <section className="panel options-panel">
          <header className="panel-head">
            <span className="panel-eyebrow">Your response</span>
            <h2 className="panel-title">Four plausible moves.</h2>
            <p className="panel-summary">The most efficient answer isn't always the right one.</p>
          </header>

          <div className="options">
            {scenario.options.map((opt) => {
              const meta = VERDICT_META[opt.verdict];
              const selected = picked === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  className={`option ${selected ? 'option-selected' : ''}`}
                  onClick={() => setPicked(opt.id)}
                >
                  <div className="option-tag">
                    <span className="option-letter">{opt.id}</span>
                    {facilitatorMode && (
                      <span
                        className="option-verdict-peek mono small"
                        style={{ color: meta.swatch }}
                      >
                        ⌁ {meta.tone}
                      </span>
                    )}
                  </div>
                  <div className="option-body">
                    <p className="option-text">{opt.text}</p>
                  </div>
                  <div className="option-radio" aria-hidden>
                    <span className="option-radio-inner" />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="options-foot">
            <button
              className="btn btn-primary"
              disabled={!picked}
              onClick={() => onSubmit(picked)}
            >
              Reveal feedback →
            </button>
            <span className="cover-hint">
              {picked
                ? `You're choosing option ${picked}. Change it anytime before revealing.`
                : 'Select an option to continue.'}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────── FEEDBACK SCREEN
function FeedbackScreen({ scenario, picked, onContinue, isLast }) {
  const yourChoice = scenario.options.find((o) => o.id === picked);
  const yourMeta = VERDICT_META[yourChoice.verdict];

  return (
    <div className="feedback">
      <div className="scenario-head">
        <PhaseRail current={scenario.phaseNumber} />
        <div className="scenario-meta">
          <span className="mono small muted">// FEEDBACK · {scenario.phase.toUpperCase()}</span>
          <span className="mono small muted">// NO SCORE · ONLY NUANCE</span>
        </div>
      </div>

      <div className="feedback-grid">
        <section className="panel feedback-main">
          <header className="panel-head">
            <span className="panel-eyebrow">Your choice</span>
            <h2 className="panel-title">
              Option {picked} ·{' '}
              <span style={{ color: yourMeta.swatch }}>{yourMeta.chipLabel}</span>
            </h2>
            <p className="panel-summary chosen-quote">
              &ldquo;{yourChoice.text.replace(/^"|"$/g, '')}&rdquo;
            </p>
          </header>

          <div className="feedback-why">
            <span className="mono small muted">// WHY THIS RESPONSE READS THAT WAY</span>
            <p>{yourChoice.why}</p>
          </div>

          <hr className="rule" />

          <div className="all-options">
            <span className="mono small muted">// HOW ALL FOUR RESPONSES READ</span>
            <ul className="all-options-list">
              {scenario.options.map((opt) => {
                const m = VERDICT_META[opt.verdict];
                return (
                  <li
                    key={opt.id}
                    className={`all-option ${opt.id === picked ? 'all-option-picked' : ''}`}
                  >
                    <div className="all-option-head">
                      <span className="option-letter small-letter">{opt.id}</span>
                      <span className="all-option-label mono" style={{ color: m.swatch }}>
                        {m.chipLabel}
                      </span>
                      {opt.id === picked && (
                        <span className="all-option-yours">— your pick</span>
                      )}
                    </div>
                    <p className="all-option-text">{opt.text}</p>
                    <p className="all-option-why">{opt.why}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <aside className="panel feedback-side">
          <div className="core-card">
            <span className="panel-eyebrow">Common-core response</span>
            <p className="core-text">{scenario.commonCore}</p>
          </div>

          <div className="facilitator-card">
            <div className="facilitator-head">
              <span className="panel-eyebrow">For the room</span>
              <span className="mono small muted">// FACILITATOR PROMPT</span>
            </div>
            <p className="facilitator-question">{scenario.facilitatorQuestion}</p>
            <div className="facilitator-meta mono small muted">
              Suggested time · 5–8 minutes of open discussion before moving on.
            </div>
          </div>

          <div className="phase-context-card">
            <span className="panel-eyebrow">Where we are</span>
            <div className="phase-context-body">
              <div className="phase-context-num mono">
                {String(scenario.phaseNumber).padStart(2, '0')} / 05
              </div>
              <div className="phase-context-name">{scenario.phase}</div>
              <p className="phase-context-blurb">{phaseBlurb(scenario.phase)}</p>
            </div>
          </div>

          <button className="btn btn-primary btn-wide" onClick={onContinue}>
            {isLast ? 'See the engagement summary →' : 'Continue to next scenario →'}
          </button>
        </aside>
      </div>
    </div>
  );
}

function phaseBlurb(phase) {
  switch (phase) {
    case 'Analysis':
      return "Sam is being asked to commit to a solution before the problem is clear. The consultative move is to investigate without sounding like you're stalling.";
    case 'Design':
      return 'Joe is trading off design rigor for operational simplicity. The consultative move is to know which trades cost the outcome and which are free.';
    case 'Develop':
      return "Marcus's instinct is right; his scope is wrong. The consultative move is to anchor scope to the agreed performance objectives — not to argue taste.";
    case 'Implement':
      return 'Renee is offering a clean binary: ship or wait. The consultative move is to surface a third path that respects the constraint without forfeiting the work.';
    case 'Evaluate':
      return 'Joe is asking for activity data. Leadership is going to read it as outcome data. The consultative move is to bridge that gap on one slide.';
    default:
      return '';
  }
}

// ────────────────────────────────────────────────────────────── SUMMARY SCREEN
function Summary({ choices, onRestart, scenarios }) {
  const counts = useMemo(() => {
    const c = { strongest: 0, partial: 0, 'order-taker': 0, over: 0 };
    Object.entries(choices).forEach(([sid, oid]) => {
      const sc = scenarios.find((s) => s.id === sid);
      const opt = sc?.options.find((o) => o.id === oid);
      if (opt) c[opt.verdict] += 1;
    });
    return c;
  }, [choices, scenarios]);

  const pattern = readPattern(counts);

  return (
    <div className="summary">
      <div className="scenario-head">
        <PhaseRail current={6} />
        <div className="scenario-meta">
          <span className="mono small muted">// ENGAGEMENT SUMMARY</span>
          <span className="mono small muted">// THE POINT IS THE PATTERN</span>
        </div>
      </div>

      <div className="summary-grid">
        <section className="panel summary-main">
          <header className="panel-head">
            <span className="panel-eyebrow">Your pattern across five decisions</span>
            <h2 className="panel-title display-2">{pattern.headline}</h2>
            <p className="panel-summary">{pattern.body}</p>
          </header>

          <div className="bars">
            {[
              ['strongest', 'Strongest', counts.strongest],
              ['partial', 'Partial', counts.partial],
              ['order-taker', 'Risky / order-taker', counts['order-taker']],
              ['over', 'Premature / too broad', counts.over],
            ].map(([key, label, n]) => (
              <div className="bar-row" key={key}>
                <div className="bar-label">
                  <span className="bar-dot" style={{ background: VERDICT_META[key].swatch }} />
                  <span>{label}</span>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${(n / 5) * 100}%`,
                      background: VERDICT_META[key].swatch,
                    }}
                  />
                </div>
                <div className="bar-num mono">{n} / 5</div>
              </div>
            ))}
          </div>

          <hr className="rule" />

          <div className="recap">
            <span className="mono small muted">// YOUR PATH</span>
            <ol className="recap-list">
              {scenarios.map((s, i) => {
                const oid = choices[s.id];
                const opt = s.options.find((o) => o.id === oid);
                const m = opt ? VERDICT_META[opt.verdict] : null;
                return (
                  <li key={s.id}>
                    <div className="recap-phase mono small">
                      {String(i + 1).padStart(2, '0')} · {s.phase}
                    </div>
                    <div className="recap-title">{s.title}</div>
                    <div className="recap-pick" style={{ color: m?.swatch }}>
                      {opt ? `Option ${opt.id} — ${m.chipLabel}` : '— skipped'}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <aside className="panel summary-side">
          <div className="core-card">
            <span className="panel-eyebrow">For the facilitator</span>
            <p className="core-text">
              The point isn't whether participants chose A every time. The point is the{' '}
              <em>pull</em> they felt — toward efficiency, toward rigor, toward avoiding
              conflict — and what that pull tells them about how they show up with real
              clients.
            </p>
          </div>

          <div className="facilitator-card">
            <span className="panel-eyebrow">Closing prompts</span>
            <ul className="closing-list">
              <li>
                Which scenario felt easiest to answer? Which felt hardest? What does that tell
                you?
              </li>
              <li>
                Where did you reach for the order-taker move? What did it offer in the moment
                that the stronger move did not?
              </li>
              <li>
                Identify one of these five conversations you've had — or ducked — in the last
                90 days.
              </li>
            </ul>
          </div>

          <button className="btn btn-primary btn-wide" onClick={onRestart}>
            Run the simulation again ↻
          </button>
        </aside>
      </div>
    </div>
  );
}

function readPattern({ strongest, partial, 'order-taker': ot, over }) {
  if (strongest >= 4)
    return {
      headline: 'Consultative throughout.',
      body:
        "You consistently chose to investigate, trade carefully, and reframe constraints. The work now is to notice the moments you almost didn't — and what nearly pulled you off.",
    };
  if (ot >= 2)
    return {
      headline: 'A pull toward delivery.',
      body:
        "More than once you took the request at face value and moved straight to execution. That's not wrong — it's how relationships get built early on. The question is whether you're choosing it, or defaulting to it.",
    };
  if (over >= 2)
    return {
      headline: 'A pull toward rigor.',
      body:
        'You reached for the more thorough framework more than once. The instinct is right; the calibration matters. Heavy process at the wrong moment reads as friction, not value.',
    };
  if (partial >= 2)
    return {
      headline: 'Mostly considered, occasionally underweight.',
      body:
        "You're rarely off — but a few of your picks gave away leverage you didn't need to give. Worth talking through which trades felt easy and why.",
    };
  return {
    headline: 'A mixed read.',
    body:
      "Your choices spanned the spectrum. That's often where the most interesting conversations are — about what felt right in each moment and what tipped you toward which mode.",
  };
}

// ─────────────────────────────────────────────────────────────────── APP SHELL
export default function App() {
  const scenarios = SCENARIOS;
  const [stage, setStage] = useState('cover'); // cover | scenario | feedback | summary
  const [idx, setIdx] = useState(0);
  const [choices, setChoices] = useState({});
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.paper = t.paper;
  }, [t.paper]);

  function begin() {
    setIdx(0);
    setChoices({});
    setStage('scenario');
  }

  function onSubmit(optionId) {
    const sc = scenarios[idx];
    setChoices((c) => ({ ...c, [sc.id]: optionId }));
    setStage('feedback');
  }

  function onContinue() {
    if (idx + 1 >= scenarios.length) {
      setStage('summary');
    } else {
      setIdx(idx + 1);
      setStage('scenario');
    }
  }

  function restart() {
    setIdx(0);
    setChoices({});
    setStage('cover');
  }

  const current = scenarios[idx];

  return (
    <div className="app">
      <Topbar onHome={restart} />

      <main className="stage">
        {stage === 'cover' && <Cover onBegin={begin} />}
        {stage === 'scenario' && (
          <ScenarioScreen
            scenario={current}
            index={idx}
            total={scenarios.length}
            onSubmit={onSubmit}
            facilitatorMode={t.facilitatorMode}
            onJumpPhase={(i) => {
              setIdx(i);
              setStage('scenario');
            }}
          />
        )}
        {stage === 'feedback' && (
          <FeedbackScreen
            scenario={current}
            picked={choices[current.id]}
            onContinue={onContinue}
            isLast={idx + 1 >= scenarios.length}
          />
        )}
        {stage === 'summary' && (
          <Summary choices={choices} onRestart={restart} scenarios={scenarios} />
        )}
      </main>

      <Footer />

      {!tweaksOpen && (
        <button
          type="button"
          className="tweaks-launcher"
          onClick={() => setTweaksOpen(true)}
          aria-label="Open tweaks panel"
        >
          ⚙ Tweaks
        </button>
      )}

      <TweaksPanel title="Tweaks" open={tweaksOpen} onOpenChange={setTweaksOpen}>
        <TweakSection label="Facilitation">
          <TweakToggle
            label="Facilitator mode"
            value={t.facilitatorMode}
            onChange={(v) => setTweak('facilitatorMode', v)}
          />
        </TweakSection>
        <TweakSection label="Surface">
          <TweakRadio
            label="Paper"
            value={t.paper}
            onChange={(v) => setTweak('paper', v)}
            options={[
              { value: 'cream', label: 'Light' },
              { value: 'fog', label: 'Fog' },
              { value: 'ink', label: 'Ink' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

function Topbar({ onHome }) {
  return (
    <header className="topbar">
      <button className="brand" onClick={onHome}>
        <span className="brand-mark" aria-hidden>
          <span className="brand-mark-inner" />
        </span>
        <span className="brand-text">
          <span className="brand-name">FIELDWORK</span>
          <span className="brand-sub mono small">// L&amp;D Consulting Simulation</span>
        </span>
      </button>

      <div className="topbar-right mono small muted">
        LOGISTICS-XYZ · 5S PERF GAP · {new Date().toISOString().slice(0, 10)}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer mono small muted">
      <div>FIELDWORK · five decisions, no right answers</div>
      <div>Built for L&amp;D consultants, IDs, and performance-improvement teams</div>
    </footer>
  );
}
