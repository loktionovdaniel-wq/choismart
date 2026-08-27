import "./index.css";

type Tool = {
  id: string;
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
    target: "jasper",
  },
  {
    icon: "📣",
    title: "Marketing",
    description: "Marketing, SEO & sales",
    target: "copy-ai",
  },
  {
    icon: "🎬",
    title: "Video",
    description: "Create & edit videos with AI",
    target: "heygen",
  },
  {
    icon: "🎙️",
    title: "Voice",
    description: "Voice, audio & speech",
    target: "elevenlabs",
  },
  {
    icon: "🔎",
    title: "SEO",
    description: "Research, rankings & content",
    target: "surfer",
  },
  {
    icon: "⚡",
    title: "Productivity",
    description: "Work faster with AI",
    target: "clickup",
  },
];

const tools: Tool[] = [
  {
    id: "jasper",
    name: "Jasper",
    category: "Marketing AI",
    description:
      "If you create content for a business, Jasper can save you hours every week. It helps you write blog posts, ads, emails, social media content and complete marketing campaigns while keeping your brand's tone consistent. Instead of staring at a blank page, you can give Jasper your goal and let it help you turn the idea into something you can actually use.",
    rating: "4.8",
    price: "Paid",
    icon: "J",
    accent: "violet",
    badge: "Editor's Pick",
    affiliateUrl: "YOUR_JASPER_AFFILIATE_LINK",
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    category: "Marketing AI",
    description:
      "Copy.ai is especially useful when you have a business idea but don't want to spend hours creating all the marketing around it. You can use it for sales emails, product descriptions, social posts, outreach and repeatable business workflows. It's a good option if you want AI to help with the work behind the scenes, not just write one paragraph at a time.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "C",
    accent: "blue",
    badge: "Popular",
    affiliateUrl: "YOUR_COPY_AI_AFFILIATE_LINK",
  },
  {
    id: "writesonic",
    name: "Writesonic",
    category: "Writing & SEO",
    description:
      "Writesonic is a strong choice if you want one place for writing and SEO. You can use it to create articles, website copy, product descriptions and other content, then improve that content for search engines. If you're building a website, running a business or trying to get more people to find your content on Google, this can become a very practical tool.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "W",
    accent: "orange",
    badge: "Best for SEO",
    affiliateUrl: "YOUR_WRITESONIC_AFFILIATE_LINK",
  },
  {
    id: "surfer",
    name: "Surfer",
    category: "SEO AI",
    description:
      "If you have a website and want people to actually find it through Google, Surfer is worth looking at. It helps you understand what successful pages are doing and gives you guidance on how to structure and improve your own content. It's less about simply generating words and more about helping you create content with a real SEO strategy behind it.",
    rating: "4.8",
    price: "Paid",
    icon: "S",
    accent: "green",
    badge: "SEO Pick",
    affiliateUrl: "YOUR_SURFER_AFFILIATE_LINK",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "Voice AI",
    description:
      "Imagine being able to turn a script into a natural-sounding voice without hiring a voice actor or recording everything yourself. That's where ElevenLabs becomes useful. You can create narration for YouTube videos, social media, presentations, educational content and more. The voices are designed to sound natural, which makes it especially interesting for creators and businesses.",
    rating: "4.9",
    price: "Free / Paid",
    icon: "11",
    accent: "dark",
    badge: "Top Voice AI",
    affiliateUrl: "YOUR_ELEVENLABS_AFFILIATE_LINK",
  },
  {
    id: "heygen",
    name: "HeyGen",
    category: "Video AI",
    description:
      "HeyGen is for people who want to create professional-looking videos without standing in front of a camera every time. You can create videos with AI avatars, turn scripts into presentations and produce content for business, education or social media. It's particularly useful when you need to make videos regularly but don't want filming, lighting and editing to become a full-time job.",
    rating: "4.8",
    price: "Free / Paid",
    icon: "H",
    accent: "purple",
    badge: "Video Pick",
    affiliateUrl: "YOUR_HEYGEN_AFFILIATE_LINK",
  },
  {
    id: "pictory",
    name: "Pictory",
    category: "Video AI",
    description:
      "Pictory is useful when you already have an idea, article or script and want to turn it into video content faster. It can help transform written material into videos, add visuals and make the editing process much easier. For creators, marketers and businesses that need a steady stream of video content, it can remove a lot of repetitive editing work.",
    rating: "4.6",
    price: "Paid",
    icon: "P",
    accent: "red",
    affiliateUrl: "YOUR_PICTORY_AFFILIATE_LINK",
  },
  {
    id: "descript",
    name: "Descript",
    category: "Video & Audio",
    description:
      "Descript takes a different approach to video editing: instead of dealing only with complicated timelines, you can edit much of your video by editing the transcript. That makes it especially convenient for podcasts, interviews, YouTube videos and other talking-head content. You can remove parts of a recording, clean up audio and make changes without needing to be a professional editor.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "D",
    accent: "pink",
    badge: "Creator Pick",
    affiliateUrl: "YOUR_DESCRIPT_AFFILIATE_LINK",
  },
  {
    id: "murf",
    name: "Murf",
    category: "Voice AI",
    description:
      "Murf is built for people who need polished voiceovers without recording them manually. It can be useful for presentations, advertisements, training videos, online courses and social media content. You choose a voice and provide your script, then adjust the delivery to create something that feels much more professional than a basic computer-generated voice.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "M",
    accent: "teal",
    affiliateUrl: "YOUR_MURF_AFFILIATE_LINK",
  },
  {
    id: "clickup",
    name: "ClickUp",
    category: "Productivity AI",
    description:
      "ClickUp is for people who feel like their work is scattered across too many places. You can use it to organize projects, tasks, notes and team work, while its AI features can help summarize information, write content and speed up everyday work. If you're running a business or simply trying to become more organized, this is the kind of tool that can save time every single day.",
    rating: "4.8",
    price: "Free / Paid",
    icon: "✓",
    accent: "indigo",
    badge: "Productivity Pick",
    affiliateUrl: "YOUR_CLICKUP_AFFILIATE_LINK",
  },
];

function scrollToTool(id: string) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

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
            <a href="#popular">AI Tools</a>
          </nav>

          <button
            className="nav-button"
            onClick={() => scrollToTool("jasper")}
          >
            Find AI
            <span>→</span>
          </button>
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

              <button onClick={() => scrollToTool("jasper")}>
                Find AI
                <span>→</span>
              </button>
            </div>

            <div className="popular-searches">
              <span>Popular:</span>

              <button onClick={() => scrollToTool("jasper")}>
                Writing
              </button>

              <button onClick={() => scrollToTool("copy-ai")}>
                Marketing
              </button>

              <button onClick={() => scrollToTool("heygen")}>
                Video
              </button>

              <button onClick={() => scrollToTool("elevenlabs")}>
                Voice
              </button>

              <button onClick={() => scrollToTool("surfer")}>
                SEO
              </button>
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
              Pick a category and we'll take you directly to the tools that
              can actually help.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <button
                className="category-card"
                key={category.title}
                onClick={() => scrollToTool(category.target)}
              >
                <div className="category-icon">{category.icon}</div>

                <div className="category-copy">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>

                <span className="category-arrow">↗</span>
              </button>
            ))}
          </div>
        </section>

        <section className="section tools-section" id="popular">
          <div className="section-header">
            <div>
              <span className="section-kicker">EDITOR'S PICKS</span>
              <h2>AI tools worth knowing</h2>
            </div>

            <span className="text-link">10 curated tools</span>
          </div>

          <div className="tools-grid">
            {tools.map((tool) => (
              <article
                className="tool-card"
                key={tool.name}
                id={tool.id}
              >
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
                    Try {tool.name}
                    <span>→</span>
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
              Not sure which AI is right for you? Start with the category that
              matches what you're trying to accomplish. We've picked tools
              that can save you time instead of making your search even more
              complicated.
            </p>

            <button
              className="finder-button"
              onClick={() => scrollToTool("jasper")}
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
