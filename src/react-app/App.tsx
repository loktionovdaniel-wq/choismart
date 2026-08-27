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
    target: "tool-jasper",
  },
  {
    icon: "📣",
    title: "Marketing",
    description: "Marketing, SEO & sales",
    target: "tool-copy-ai",
  },
  {
    icon: "🎬",
    title: "Video",
    description: "Create & edit videos with AI",
    target: "tool-heygen",
  },
  {
    icon: "🎙️",
    title: "Voice",
    description: "Voice, audio & speech",
    target: "tool-elevenlabs",
  },
  {
    icon: "🔎",
    title: "SEO",
    description: "Research, rankings & content",
    target: "tool-surfer",
  },
  {
    icon: "⚡",
    title: "Productivity",
    description: "Work faster with AI",
    target: "tool-clickup",
  },
];

const tools: Tool[] = [
  {
    id: "tool-jasper",
    name: "Jasper",
    category: "Writing & Marketing AI",
    description:
      "If you regularly write posts, ads, emails, website copy or marketing campaigns, Jasper can take a lot of the blank-page work off your shoulders. You give it the idea, audience and tone you want, and it helps turn that rough idea into polished content. It is especially useful for businesses and creators who need to produce a lot of content without spending hours staring at an empty document.",
    rating: "4.8",
    price: "Paid",
    icon: "J",
    accent: "violet",
    badge: "Editor's Pick",
    affiliateUrl: "YOUR_JASPER_AFFILIATE_LINK",
  },
  {
    id: "tool-copy-ai",
    name: "Copy.ai",
    category: "Marketing & Sales AI",
    description:
      "Copy.ai is useful when your work involves selling, promoting or growing something. It can help with marketing ideas, sales emails, product descriptions, social media content and repeatable business workflows. Instead of asking AI the same questions over and over, you can use structured workflows to speed up everyday marketing tasks. It is a good choice when you want AI to become part of your actual business process, not just a chatbot you occasionally open.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "C",
    accent: "blue",
    badge: "Popular",
    affiliateUrl: "YOUR_COPY_AI_AFFILIATE_LINK",
  },
  {
    id: "tool-writesonic",
    name: "Writesonic",
    category: "Writing & SEO",
    description:
      "Writesonic is a strong option if you want to create useful online content without starting everything from scratch. You can use it for articles, website copy, product descriptions, marketing content and SEO-focused writing. It is particularly helpful when you know what you want to say but don't want to spend hours researching, outlining and rewriting the same piece of content. For bloggers, small businesses and people building websites, it can make the entire content process feel much faster.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "W",
    accent: "orange",
    badge: "Best for SEO",
    affiliateUrl: "YOUR_WRITESONIC_AFFILIATE_LINK",
  },
  {
    id: "tool-surfer",
    name: "Surfer",
    category: "SEO AI",
    description:
      "If you have a website and actually want people to find it through Google, Surfer is worth looking at. It helps you understand what successful pages are doing and gives you practical guidance for improving your own content. You can use it for keyword research, content planning, optimization and SEO writing. Instead of guessing whether an article is strong enough to compete, Surfer gives you data and recommendations that can help you make smarter decisions.",
    rating: "4.8",
    price: "Paid",
    icon: "S",
    accent: "green",
    badge: "SEO Pick",
    affiliateUrl: "YOUR_SURFER_AFFILIATE_LINK",
  },
  {
    id: "tool-elevenlabs",
    name: "ElevenLabs",
    category: "Voice AI",
    description:
      "ElevenLabs is for people who want realistic voice audio without having to record everything themselves. You can turn written scripts into natural-sounding narration for videos, advertisements, presentations, podcasts and other projects. It supports many languages and different voices, making it useful when you need professional-sounding audio but don't have a voice actor or recording studio available. For creators, businesses and video makers, this can save a surprising amount of time.",
    rating: "4.9",
    price: "Free / Paid",
    icon: "11",
    accent: "dark",
    badge: "Top Voice AI",
    affiliateUrl: "YOUR_ELEVENLABS_AFFILIATE_LINK",
  },
  {
    id: "tool-heygen",
    name: "HeyGen",
    category: "Video AI",
    description:
      "HeyGen is useful when you want to make professional-looking videos but don't want to stand in front of a camera every time. You can create videos with AI avatars, presenters, scripts and voiceovers, which makes it useful for marketing, training, education, product demonstrations and social media. It can be especially valuable for businesses that need to create lots of video content quickly without hiring a full production team.",
    rating: "4.8",
    price: "Free / Paid",
    icon: "H",
    accent: "purple",
    badge: "Video Pick",
    affiliateUrl: "YOUR_HEYGEN_AFFILIATE_LINK",
  },
  {
    id: "tool-pictory",
    name: "Pictory",
    category: "Video AI",
    description:
      "Pictory is a great starting point if you already have words but need to turn them into video. You can use scripts, articles or ideas as the foundation for creating videos with AI. This makes it useful for social media creators, marketers, educators and businesses that want to turn written content into something people can watch. Instead of learning complicated video-editing software, you can let AI handle much of the initial production work.",
    rating: "4.6",
    price: "Paid",
    icon: "P",
    accent: "red",
    affiliateUrl: "YOUR_PICTORY_AFFILIATE_LINK",
  },
  {
    id: "tool-descript",
    name: "Descript",
    category: "Video & Audio",
    description:
      "Descript takes a different approach to video and audio editing: you can edit your media almost like you are editing a document. That means you can work with a transcript, remove sections of speech, clean up audio and make changes without dealing with a complicated traditional timeline every time. It is especially useful for podcasts, interviews, YouTube videos and creators who spend a lot of time editing spoken content.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "D",
    accent: "pink",
    badge: "Creator Pick",
    affiliateUrl: "YOUR_DESCRIPT_AFFILIATE_LINK",
  },
  {
    id: "tool-murf",
    name: "Murf",
    category: "Voice AI",
    description:
      "Murf is designed for people who need clean, professional voiceovers without recording them manually. It can be useful for presentations, advertisements, training videos, product videos, online courses and business content. You can start with your script and choose a voice that fits the feeling you want. If recording your own voice takes too much time or you simply don't like how it sounds on a microphone, this gives you another way to produce polished narration.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "M",
    accent: "teal",
    affiliateUrl: "YOUR_MURF_AFFILIATE_LINK",
  },
  {
    id: "tool-clickup",
    name: "ClickUp",
    category: "Productivity AI",
    description:
      "ClickUp is for people who have too many things to keep track of. Projects, tasks, deadlines, notes and team communication can all live in one place, while its AI features can help with writing, summarizing information and organizing work. It is useful for freelancers, business owners and teams who are tired of having tasks scattered across messages, notes and different apps. The goal is simple: spend less time organizing your work and more time actually doing it.",
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
      block: "center",
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

            <a href="#popular">Popular</a>
          </nav>

          <button
            className="nav-button"
            onClick={() => scrollToTool("tool-jasper")}
          >
            Explore AI
            <span>→</span>
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}

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

              <button onClick={() => scrollToTool("tool-jasper")}>
                Find AI
                <span>→</span>
              </button>
            </div>

            <div className="popular-searches">
              <span>Popular:</span>

              <button onClick={() => scrollToTool("tool-jasper")}>
                Writing
              </button>

              <button onClick={() => scrollToTool("tool-copy-ai")}>
                Marketing
              </button>

              <button onClick={() => scrollToTool("tool-heygen")}>
                Video
              </button>

              <button onClick={() => scrollToTool("tool-elevenlabs")}>
                Voice
              </button>

              <button onClick={() => scrollToTool("tool-surfer")}>
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

        {/* CATEGORIES */}

        <section className="section" id="categories">
          <div className="section-header">
            <div>
              <span className="section-kicker">EXPLORE</span>

              <h2>What do you need AI for?</h2>
            </div>

            <p>
              Pick a category and we'll take you straight to the tools that
              actually fit it.
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

        {/* TOOLS */}

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
                id={tool.id}
                key={tool.name}
              >
                <div className={`tool-logo ${tool.accent}`}>
                  {tool.icon}
                </div>

                <div className="tool-top">
                  {tool.badge && (
                    <span className="tool-badge">
                      {tool.badge}
                    </span>
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
                    Explore
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FINDER */}

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
              Not sure which AI is right for you? Start with the category
              that matches what you're trying to accomplish. We've picked
              tools that can save you time instead of making your search
              even more complicated.
            </p>

            <button
              className="finder-button"
              onClick={() => scrollToTool("tool-jasper")}
            >
              Explore AI tools
              <span>→</span>
            </button>
          </div>

          {/* Чистая декорация — без карточек, которые накладывались на текст */}

          <div className="finder-decoration">
            <div className="finder-orb">
              <span>✦</span>
            </div>
          </div>
        </section>

        {/* WHY CHOISMART */}

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

      {/* FOOTER */}

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
            <button onClick={() => scrollToTool("tool-jasper")}>
              Explore AI
            </button>

            <a href="#categories">
              Categories
            </a>

            <a href="#popular">
              AI Tools
            </a>
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
