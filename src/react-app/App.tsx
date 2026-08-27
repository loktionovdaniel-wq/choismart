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
    target: "tool-writesonic",
  },
  {
    icon: "📣",
    title: "Marketing",
    description: "Marketing, SEO & sales",
    target: "tool-jasper",
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
    category: "Marketing AI",
    description:
      "Jasper is built for people who need to create marketing content without spending hours staring at a blank screen. You can use it to build campaigns, write ads, create social media content, develop brand messaging and turn rough ideas into polished marketing materials. It is especially useful when you already know what you want to say but need help saying it clearly, consistently and at scale. If you run a business, work in marketing or regularly need content that sounds professional and stays consistent with your brand, Jasper can take a lot of repetitive work off your plate.",
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
    category: "Marketing AI",
    description:
      "Copy.ai is useful when marketing work starts piling up and you need to move faster. It can help with sales messages, marketing campaigns, product descriptions, emails, social media ideas and other repetitive content tasks. Instead of creating everything from scratch, you can give it your goal, audience and basic information and let it help you build the first version. It is a good choice for business owners, marketers and sales teams who want to spend less time writing routine material and more time actually running the business.",
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
      "Writesonic is a strong option when you need more than just a quick paragraph from AI. You can use it to create articles, website copy, product descriptions, marketing content and SEO-focused material. It is especially helpful if you regularly publish online and don't want every piece of content to start with a completely empty page. Give it your topic, audience and goal, then use the result as a starting point that you can edit and make your own. For bloggers, business owners and people building websites, it can make the entire content process feel much less overwhelming.",
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
      "Surfer is for people who want their website content to actually have a chance of being found in Google. Instead of simply asking AI to write an article and hoping for the best, Surfer helps you understand what important topics, keywords and structure your content may need. You can use it to plan content, optimize existing pages and improve articles before publishing them. If you have a business website, blog or online store and organic Google traffic matters to you, Surfer can help turn SEO from something confusing into a much more practical process.",
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
      "ElevenLabs is useful when you need a realistic voice without hiring a voice actor or recording everything yourself. You can create narration for videos, voiceovers, educational content, presentations and other projects, with voices that sound much more natural than traditional text-to-speech. It can also be useful when you need content in different languages or want to turn written scripts into audio quickly. For YouTube creators, businesses, developers and anyone working with audio, it can save a surprising amount of time.",
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
      "HeyGen is designed for people who want to make professional-looking videos without standing in front of a camera every time. You can create videos with AI avatars, turn scripts into presentations and produce content for marketing, education, training or social media. It is especially interesting for businesses because you can create polished video content without a traditional camera setup, filming location or full production team. If you have an idea, a script and a clear message, HeyGen can help turn that into a finished video much faster.",
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
      "Pictory is helpful when you already have written content but want to turn it into video. You can start with a script, article, idea or other text and use AI to help create a video around it. This makes it useful for creators, marketers and businesses that want to produce more video content without learning complicated editing software. If you have blog posts, educational material or marketing copy sitting unused, Pictory can help turn that existing content into something people can watch and share.",
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
      "Descript makes editing feel much more familiar because you can work with video and audio almost like you are editing a document. You can edit the transcript, remove parts of a recording and use AI-powered tools to clean up and improve your content. It is especially useful for podcasts, YouTube videos, interviews, tutorials and other content where editing spoken words takes a lot of time. If traditional video editors feel complicated or intimidating, Descript offers a much simpler way to get started.",
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
      "Murf is built around professional AI voiceovers. It can help you create narration for presentations, advertisements, training videos, explainers and other business content without recording your own voice every time. You can experiment with different voices, pacing and delivery until the result fits your project. It is a practical option for businesses and creators who need polished voiceovers regularly but don't want to spend hours recording and editing audio themselves.",
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
      "ClickUp is useful when your problem isn't creating content — it's keeping everything organized. It combines tasks, projects, documents, planning and AI features in one workspace. You can use it to organize projects, write and summarize information, manage deadlines and keep track of what needs to happen next. If you have a business, work with a team or simply feel like your tasks are scattered across too many apps, ClickUp can give you one place to bring everything together and make your day easier to manage.",
    rating: "4.8",
    price: "Free / Paid",
    icon: "✓",
    accent: "indigo",
    badge: "Productivity Pick",
    affiliateUrl: "YOUR_CLICKUP_AFFILIATE_LINK",
  },
];

function App() {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const openTool = (tool: Tool) => {
    if (!tool.affiliateUrl || tool.affiliateUrl.startsWith("YOUR_")) {
      window.alert(
        `${tool.name} is ready to be connected. Add your affiliate link for this tool first.`
      );
      return;
    }

    window.open(tool.affiliateUrl, "_blank", "noopener,noreferrer");
  };

  const handleSearch = (value: string) => {
    const query = value.trim().toLowerCase();

    if (!query) {
      scrollToElement("popular");
      return;
    }

    const matchingTool = tools.find((tool) => {
      return (
        tool.name.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
      );
    });

    if (matchingTool) {
      scrollToElement(matchingTool.id);
      return;
    }

    const matchingCategory = categories.find((category) => {
      return (
        category.title.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query)
      );
    });

    if (matchingCategory) {
      scrollToElement(matchingCategory.target);
      return;
    }

    window.alert(
      "We couldn't find an exact match yet. Try Writing, Marketing, Video, Voice, SEO or Productivity."
    );
  };

  return (
    <div className="site">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <header className="navbar">
        <div className="nav-inner">
          <a className="brand" href="#explore">
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
                id="ai-search"
                type="text"
                placeholder="What do you want AI to help with?"
                aria-label="Search for an AI tool"
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch(event.currentTarget.value);
                  }
                }}
              />

              <button
                onClick={() => {
                  const input = document.getElementById(
                    "ai-search"
                  ) as HTMLInputElement | null;

                  handleSearch(input?.value || "");
                }}
              >
                Find AI
                <span>→</span>
              </button>
            </div>

            <div className="popular-searches">
              <span>Popular:</span>

              <button
                type="button"
                onClick={() => scrollToElement("tool-writesonic")}
              >
                Writing
              </button>

              <button
                type="button"
                onClick={() => scrollToElement("tool-jasper")}
              >
                Marketing
              </button>

              <button
                type="button"
                onClick={() => scrollToElement("tool-heygen")}
              >
                Video
              </button>

              <button
                type="button"
                onClick={() => scrollToElement("tool-elevenlabs")}
              >
                Voice
              </button>

              <button
                type="button"
                onClick={() => scrollToElement("tool-surfer")}
              >
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
              Pick a category and discover AI tools built for the job.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <button
                className="category-card"
                type="button"
                key={category.title}
                onClick={() => scrollToElement(category.target)}
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
                key={tool.id}
                id={tool.id}
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
                    type="button"
                    onClick={() => openTool(tool)}
                  >
                    Explore
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
              Not sure where to start? Tell us what you're trying to
              accomplish and explore the AI tools that make the most sense
              for you.
            </p>

            <button
              className="finder-button"
              type="button"
              onClick={() => scrollToElement("popular")}
            >
              Find my AI
              <span>→</span>
            </button>
          </div>

          <div className="finder-decoration">
            <div className="finder-orb">
              <span>✦</span>
            </div>

            <div className="floating-card card-two">
              <span>🎬</span>
              Video
              <strong>Top tools</strong>
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
            <a
              className="brand footer-brand"
              href="#explore"
            >
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
