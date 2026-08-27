import "./index.css";
import { useState } from "react";

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
  tags: string[];
};

const categories = [
  {
    icon: "✍️",
    title: "Writing",
    description: "Content, copy & business writing",
    tools: ["jasper", "writesonic"],
  },
  {
    icon: "📣",
    title: "Marketing",
    description: "Marketing, SEO & sales",
    tools: ["jasper", "copy-ai"],
  },
  {
    icon: "🎬",
    title: "Video",
    description: "Create & edit videos with AI",
    tools: ["heygen", "pictory", "descript"],
  },
  {
    icon: "🎙️",
    title: "Voice",
    description: "Voice, audio & speech",
    tools: ["elevenlabs", "murf"],
  },
  {
    icon: "🔎",
    title: "SEO",
    description: "Research, rankings & content",
    tools: ["writesonic", "surfer"],
  },
  {
    icon: "⚡",
    title: "Productivity",
    description: "Work faster with AI",
    tools: ["clickup"],
  },
];

const tools: Tool[] = [
  {
    id: "jasper",
    name: "Jasper",
    category: "Marketing AI",
    description:
      "If you run a business, create content or work in marketing, Jasper can save you a huge amount of time. You can use it for ads, social media posts, blog content, email campaigns and other marketing materials without starting every piece from a blank page. It is especially useful when you need to create a lot of content while keeping your brand voice consistent.",
    rating: "4.8",
    price: "Paid",
    icon: "J",
    accent: "violet",
    badge: "Editor's Pick",
    affiliateUrl: "YOUR_JASPER_AFFILIATE_LINK",
    tags: ["writing", "marketing", "content", "ads", "business"],
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    category: "Marketing AI",
    description:
      "Copy.ai is useful when you have a business idea but don't want to spend hours figuring out what to write or how to sell it. It can help with sales messages, marketing campaigns, product descriptions, emails and repeatable business workflows. It is a practical choice for turning ideas into content your customers can actually see and use.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "C",
    accent: "blue",
    badge: "Popular",
    affiliateUrl: "YOUR_COPY_AI_AFFILIATE_LINK",
    tags: ["marketing", "sales", "writing", "business", "content"],
  },
  {
    id: "writesonic",
    name: "Writesonic",
    category: "Writing & SEO",
    description:
      "Writesonic is a strong option if you want to use AI for both writing and getting found on Google. You can create blog posts, articles, product descriptions and marketing copy while working on SEO-focused content. It is especially useful for website owners and businesses that need a steady stream of useful content without spending hours writing everything from scratch.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "W",
    accent: "orange",
    badge: "Best for SEO",
    affiliateUrl: "YOUR_WRITESONIC_AFFILIATE_LINK",
    tags: ["writing", "seo", "blog", "content", "google", "marketing"],
  },
  {
    id: "surfer",
    name: "Surfer",
    category: "SEO AI",
    description:
      "If you have a website and want more people to find it through Google, Surfer is worth knowing about. It helps you understand what successful pages are doing and gives you practical guidance for improving your own content. Instead of guessing which keywords to use or how to structure an article, you get clear SEO recommendations.",
    rating: "4.8",
    price: "Paid",
    icon: "S",
    accent: "green",
    badge: "SEO Pick",
    affiliateUrl: "YOUR_SURFER_AFFILIATE_LINK",
    tags: ["seo", "google", "website", "keywords", "content"],
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "Voice AI",
    description:
      "ElevenLabs is for people who want realistic AI voices without recording everything themselves. You can turn written text into natural-sounding speech for videos, presentations, social media, educational content and more. It is especially interesting for creators because you can experiment with different voices and languages while producing narration much faster.",
    rating: "4.9",
    price: "Free / Paid",
    icon: "11",
    accent: "dark",
    badge: "Top Voice AI",
    affiliateUrl: "YOUR_ELEVENLABS_AFFILIATE_LINK",
    tags: ["voice", "audio", "speech", "youtube", "narration", "creator"],
  },
  {
    id: "heygen",
    name: "HeyGen",
    category: "Video AI",
    description:
      "Want to make professional-looking videos without standing in front of a camera every time? HeyGen lets you create videos using AI avatars and voices. It can be useful for presentations, marketing, training, product explanations and social media content. For a small business or creator, this can make video production much easier.",
    rating: "4.8",
    price: "Free / Paid",
    icon: "H",
    accent: "purple",
    badge: "Video Pick",
    affiliateUrl: "YOUR_HEYGEN_AFFILIATE_LINK",
    tags: ["video", "avatar", "marketing", "presentation", "creator"],
  },
  {
    id: "pictory",
    name: "Pictory",
    category: "Video AI",
    description:
      "Pictory is a great option if you already have ideas, articles or scripts but want to turn them into videos. You can start with written content and use AI to help build a video around it. That makes it useful for YouTube, social media, marketing and educational content when you want to create more videos without learning complicated editing software.",
    rating: "4.6",
    price: "Paid",
    icon: "P",
    accent: "red",
    affiliateUrl: "YOUR_PICTORY_AFFILIATE_LINK",
    tags: ["video", "youtube", "content", "social media", "editing"],
  },
  {
    id: "descript",
    name: "Descript",
    category: "Video & Audio",
    description:
      "Descript changes the way you edit video and audio. Instead of spending hours moving clips around a traditional timeline, you can work with a transcript almost like editing a document. Remove words from the transcript and the corresponding part of the video can be removed too. It is especially useful for podcasts, YouTube videos and interviews.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "D",
    accent: "pink",
    badge: "Creator Pick",
    affiliateUrl: "YOUR_DESCRIPT_AFFILIATE_LINK",
    tags: ["video", "audio", "podcast", "youtube", "editing", "creator"],
  },
  {
    id: "murf",
    name: "Murf",
    category: "Voice AI",
    description:
      "Murf is designed for creating professional voiceovers without hiring a voice actor or recording yourself. You can use it for presentations, advertisements, training videos, YouTube content and other projects where clear narration matters. If you have a script ready but need a convincing voice to bring it to life, Murf can make that process much easier.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "M",
    accent: "teal",
    affiliateUrl: "YOUR_MURF_AFFILIATE_LINK",
    tags: ["voice", "voiceover", "audio", "presentation", "youtube"],
  },
  {
    id: "clickup",
    name: "ClickUp",
    category: "Productivity AI",
    description:
      "ClickUp is useful when your work, projects and tasks start getting scattered across different places. Its AI features can help you organize information, summarize work, write content and move projects forward. Whether you work alone or with a team, it can bring tasks, notes, projects and deadlines together so you spend less time organizing and more time actually working.",
    rating: "4.8",
    price: "Free / Paid",
    icon: "✓",
    accent: "indigo",
    badge: "Productivity Pick",
    affiliateUrl: "YOUR_CLICKUP_AFFILIATE_LINK",
    tags: ["productivity", "tasks", "projects", "business", "work", "team"],
  },
];

function scrollToTool(id: string) {
  setTimeout(() => {
    const element = document.getElementById(`tool-${id}`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      element.classList.add("tool-highlight");

      setTimeout(() => {
        element.classList.remove("tool-highlight");
      }, 1600);
    }
  }, 50);
}

function App() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter((tool) => {
    const query = search.toLowerCase().trim();

    if (!query) return true;

    return (
      tool.name.toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.tags.some((tag) => tag.includes(query))
    );
  });

  const openTool = (tool: Tool) => {
    if (!tool.affiliateUrl || tool.affiliateUrl.startsWith("YOUR_")) {
      window.alert(
        `${tool.name} partner link has not been connected yet.`
      );
      return;
    }

    window.open(
      tool.affiliateUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSearch = () => {
    if (!search.trim()) {
      document
        .getElementById("popular")
        ?.scrollIntoView({ behavior: "smooth" });

      return;
    }

    if (filteredTools.length === 0) {
      window.alert(
        "We couldn't find an exact match. Try writing something like video, writing, SEO or voice."
      );

      return;
    }

    scrollToTool(filteredTools[0].id);
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
              Thousands of AI tools exist. ChoiSmart helps you find
              the right ones for your work, creativity and everyday life.
            </p>

            <div className="hero-search">
              <div className="search-icon">⌕</div>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="What do you want AI to help with?"
                aria-label="Search for an AI tool"
              />

              <button onClick={handleSearch}>
                Find AI
                <span>→</span>
              </button>
            </div>

            <div className="popular-searches">
              <span>Popular:</span>

              <button
                onClick={() => scrollToTool("jasper")}
              >
                Writing
              </button>

              <button
                onClick={() => scrollToTool("heygen")}
              >
                Video
              </button>

              <button
                onClick={() => scrollToTool("elevenlabs")}
              >
                Voice
              </button>

              <button
                onClick={() => scrollToTool("surfer")}
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
              Pick a category and jump directly to the tools
              we think are worth checking out.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <button
                className="category-card"
                key={category.title}
                onClick={() => {
                  scrollToTool(category.tools[0]);
                }}
              >
                <div className="category-icon">
                  {category.icon}
                </div>

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
              <span className="section-kicker">
                EDITOR'S PICKS
              </span>

              <h2>AI tools worth knowing</h2>
            </div>

            <span className="text-link">
              {filteredTools.length} tools
            </span>
          </div>

          {filteredTools.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 20px",
                color: "#777b85",
              }}
            >
              <h3>No AI tools found</h3>

              <p>
                Try searching for video, writing, voice,
                SEO, marketing or productivity.
              </p>
            </div>
          ) : (
            <div className="tools-grid">
              {filteredTools.map((tool) => (
                <article
                  className="tool-card"
                  id={`tool-${tool.id}`}
                  key={tool.id}
                >
                  <div
                    className={`tool-logo ${tool.accent}`}
                  >
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
                      <span className="small-label">
                        PRICE
                      </span>

                      <strong>{tool.price}</strong>
                    </div>

                    <button
                      className="tool-button"
                      onClick={() => openTool(tool)}
                    >
                      Explore
                      <span>→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
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
              Not sure where to start? Tell us what you're
              trying to accomplish and explore the AI tools
              that make the most sense for you.
            </p>

            <button
              className="finder-button"
              onClick={() =>
                document
                  .getElementById("categories")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Find my AI
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
                No endless lists of random AI products.
                We focus on tools that solve real problems.
              </p>
            </div>

            <div className="why-card">
              <div className="why-number">02</div>

              <h3>Clear choices</h3>

              <p>
                See what each tool does, who it is for and
                whether it fits your needs.
              </p>
            </div>

            <div className="why-card">
              <div className="why-number">03</div>

              <h3>Choose smarter</h3>

              <p>
                Spend less time searching and more time
                actually using AI.
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
                Choi<span className="brand-highlight">
                  Smart
                </span>
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
