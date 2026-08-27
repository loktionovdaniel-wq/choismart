import "./index.css";

type Tool = {
  name: string;
  category: string;
  description: string;
  rating: string;
  price: string;
  icon: string;
  accent: string;
  badge?: string;
  affiliateUrl: string;
};

const categories = [
  {
    icon: "✍️",
    title: "Writing",
    description: "Content, copy & business writing",
  },
  {
    icon: "📣",
    title: "Marketing",
    description: "Marketing, SEO & sales",
  },
  {
    icon: "🎬",
    title: "Video",
    description: "Create & edit videos with AI",
  },
  {
    icon: "🎙️",
    title: "Voice",
    description: "Voice, audio & speech",
  },
  {
    icon: "🔎",
    title: "SEO",
    description: "Research, rankings & content",
  },
  {
    icon: "⚡",
    title: "Productivity",
    description: "Work faster with AI",
  },
];

const tools: Tool[] = [
  {
    name: "Jasper",
    category: "Marketing AI",
    description:
      "AI marketing platform for creating campaigns, content and on-brand messaging.",
    rating: "4.8",
    price: "Paid",
    icon: "J",
    accent: "violet",
    badge: "Editor's Pick",
    affiliateUrl: "YOUR_JASPER_AFFILIATE_LINK",
  },
  {
    name: "Copy.ai",
    category: "Marketing AI",
    description:
      "AI-powered workflows for marketing, sales and content creation.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "C",
    accent: "blue",
    badge: "Popular",
    affiliateUrl: "YOUR_COPY_AI_AFFILIATE_LINK",
  },
  {
    name: "Writesonic",
    category: "Writing & SEO",
    description:
      "Create articles, marketing copy and SEO content with AI.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "W",
    accent: "orange",
    badge: "Best for SEO",
    affiliateUrl: "YOUR_WRITESONIC_AFFILIATE_LINK",
  },
  {
    name: "Surfer",
    category: "SEO AI",
    description:
      "AI-powered SEO platform for planning, writing and optimizing content.",
    rating: "4.8",
    price: "Paid",
    icon: "S",
    accent: "green",
    badge: "SEO Pick",
    affiliateUrl: "YOUR_SURFER_AFFILIATE_LINK",
  },
  {
    name: "ElevenLabs",
    category: "Voice AI",
    description:
      "Create realistic AI voices, narration and audio content in many languages.",
    rating: "4.9",
    price: "Free / Paid",
    icon: "11",
    accent: "dark",
    badge: "Top Voice AI",
    affiliateUrl: "YOUR_ELEVENLABS_AFFILIATE_LINK",
  },
  {
    name: "HeyGen",
    category: "Video AI",
    description:
      "Create AI videos, avatars and presentations without traditional filming.",
    rating: "4.8",
    price: "Free / Paid",
    icon: "H",
    accent: "purple",
    badge: "Video Pick",
    affiliateUrl: "YOUR_HEYGEN_AFFILIATE_LINK",
  },
  {
    name: "Pictory",
    category: "Video AI",
    description:
      "Turn scripts, articles and ideas into engaging videos with AI.",
    rating: "4.6",
    price: "Paid",
    icon: "P",
    accent: "red",
    affiliateUrl: "YOUR_PICTORY_AFFILIATE_LINK",
  },
  {
    name: "Descript",
    category: "Video & Audio",
    description:
      "Edit video and audio almost like editing a document, with powerful AI tools.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "D",
    accent: "pink",
    badge: "Creator Pick",
    affiliateUrl: "YOUR_DESCRIPT_AFFILIATE_LINK",
  },
  {
    name: "Murf",
    category: "Voice AI",
    description:
      "Create professional AI voiceovers for videos, presentations and business content.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "M",
    accent: "teal",
    affiliateUrl: "YOUR_MURF_AFFILIATE_LINK",
  },
  {
    name: "ClickUp",
    category: "Productivity AI",
    description:
      "AI-powered productivity platform for managing projects, tasks and work.",
    rating: "4.8",
    price: "Free / Paid",
    icon: "✓",
    accent: "indigo",
    badge: "Productivity Pick",
    affiliateUrl: "YOUR_CLICKUP_AFFILIATE_LINK",
  },
];

function App() {
  const openTool = (url: string) => {
    if (!url || url.startsWith("YOUR_")) {
      window.alert(
        "This partner link has not been connected yet. We are adding the affiliate link soon."
      );
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="site">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <header className="navbar">
        <div className="nav-inner">
          <a className="brand" href="#">
            <span className="brand-mark">C</span>
            <span>
              Choi<span className="brand-highlight">Smart</span>
            </span>
          </a>

          <nav className="desktop-nav">
            <a href="#explore">Explore AI</a>
            <a href="#categories">Categories</a>
            <a href="#popular">Popular</a>
          </nav>

          <a className="nav-button" href="#popular">
            Explore AI
            <span>→</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="explore">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Discover AI tools worth using
            </div>

            <h1>
              Stop searching.
              <br />
              <span>Start choosing smarter.</span>
            </h1>

            <p className="hero-description">
              Thousands of AI tools exist. ChoiSmart helps you find the right
              ones for your work, creativity and everyday life.
            </p>

            <div className="hero-search">
              <div className="search-icon">⌕</div>

              <input
                type="text"
                placeholder="What do you want AI to help with?"
                aria-label="Search for an AI tool"
              />

              <button
                onClick={() =>
                  document
                    .getElementById("popular")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Find AI
                <span>→</span>
              </button>
            </div>

            <div className="popular-searches">
              <span>Popular:</span>
              <a href="#popular">Writing</a>
              <a href="#popular">Marketing</a>
              <a href="#popular">Video</a>
              <a href="#popular">Voice</a>
              <a href="#popular">SEO</a>
            </div>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <strong>10</strong>
              <span>AI tools selected</span>
            </div>

            <div className="trust-divider" />

            <div className="trust-item">
              <strong>Curated</strong>
              <span>Useful tools only</span>
            </div>

            <div className="trust-divider" />

            <div className="trust-item">
              <strong>Simple</strong>
              <span>Choose faster</span>
            </div>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="section-header">
            <div>
              <span className="section-kicker">EXPLORE</span>
              <h2>What do you need AI for?</h2>
            </div>

            <p>
              Pick a category and discover AI tools built for the job.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <a
                className="category-card"
                href="#popular"
                key={category.title}
              >
                <div className="category-icon">{category.icon}</div>

                <div className="category-copy">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>

                <span className="category-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section tools-section" id="popular">
          <div className="section-header">
            <div>
              <span className="section-kicker">EDITOR'S PICKS</span>
              <h2>AI tools worth knowing</h2>
            </div>

            <span className="text-link">
              10 curated tools
            </span>
          </div>

          <div className="tools-grid">
            {tools.map((tool) => (
              <article className="tool-card" key={tool.name}>
                <div className={`tool-logo ${tool.accent}`}>
                  {tool.icon}
                </div>

                <div className="tool-top">
                  {tool.badge && (
                    <span className="tool-badge">{tool.badge}</span>
                  )}

                  <span className="rating">
                    ★ {tool.rating}
                  </span>
                </div>

                <div className="tool-info">
                  <span className="tool-category">
                    {tool.category}
                  </span>

                  <h3>{tool.name}</h3>

                  <p>{tool.description}</p>
                </div>

                <div className="tool-bottom">
                  <div>
                    <span className="small-label">PRICE</span>
                    <strong>{tool.price}</strong>
                  </div>

                  <button
                    className="tool-button"
                    onClick={() => openTool(tool.affiliateUrl)}
                  >
                    Explore <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="finder-section">
          <div className="finder-content">
            <span className="section-kicker light">
              NOT SURE?
            </span>

            <h2>
              Tell us what you need.
              <br />
              <span>We'll help you choose.</span>
            </h2>

            <p>
              We are building a simple AI finder that will help you discover
              the best tool for your specific goal.
            </p>

            <button
              className="finder-button"
              onClick={() =>
                document
                  .getElementById("popular")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore AI tools
              <span>→</span>
            </button>
          </div>

          <div className="finder-decoration">
            <div className="floating-card card-one">
              <span>✍️</span>
              Writing
              <strong>Top tools</strong>
            </div>

            <div className="floating-card card-two">
              <span>🎬</span>
              Video
              <strong>Top tools</strong>
            </div>

            <div className="finder-orb">
              <span>✦</span>
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="section-header centered">
            <span className="section-kicker">
              WHY CHOISMART
            </span>

            <h2>AI is complicated enough.</h2>

            <p>
              We make choosing a tool feel simple.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-number">01</div>

              <h3>Less noise</h3>

              <p>
                No endless lists of random AI products. We focus on tools
                that solve real problems.
              </p>
            </div>

            <div className="why-card">
              <div className="why-number">02</div>

              <h3>Clear choices</h3>

              <p>
                See what each tool does, who it is for and whether it fits
                your needs.
              </p>
            </div>

            <div className="why-card">
              <div className="why-number">03</div>

              <h3>Choose smarter</h3>

              <p>
                Spend less time searching and more time actually using AI.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <a className="brand footer-brand" href="#">
              <span className="brand-mark">C</span>

              <span>
                Choi<span className="brand-highlight">Smart</span>
              </span>
            </a>

            <p className="footer-description">
              Discover better AI tools. Choose smarter.
            </p>
          </div>

          <div className="footer-links">
            <a href="#explore">Explore AI</a>
            <a href="#categories">Categories</a>
            <a href="#popular">AI Tools</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ChoiSmart</span>

          <span>
            Some links may be affiliate links.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
