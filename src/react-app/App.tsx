import "./index.css";
import { useMemo, useState } from "react";

type Tool = {
  name: string;
  category: string;
  description: string;
  longDescription: string;
  rating: string;
  price: string;
  icon: string;
  accent: string;
  badge?: string;
  affiliateUrl: string;
  keywords: string[];
};

const categories = [
  {
    icon: "✍️",
    title: "Writing",
    description: "Articles, blogs & AI writing",
    target: "Writesonic",
  },
  {
    icon: "📣",
    title: "Marketing",
    description: "Marketing, SEO & sales",
    target: "Copy.ai",
  },
  {
    icon: "🎬",
    title: "Video",
    description: "Create & edit videos with AI",
    target: "HeyGen",
  },
  {
    icon: "🎙️",
    title: "Voice",
    description: "Voice, audio & speech",
    target: "ElevenLabs",
  },
  {
    icon: "🔎",
    title: "SEO",
    description: "Research, rankings & content",
    target: "Surfer",
  },
  {
    icon: "⚡",
    title: "Productivity",
    description: "Work faster with AI",
    target: "ClickUp",
  },
];

const tools: Tool[] = [
  {
    name: "Jasper",
    category: "Marketing AI",
    description:
      "If you work with advertising or content, Jasper is worth checking out. It can help turn your ideas into ads, emails, social posts and website copy.",
    longDescription:
      "Jasper is built for people who spend a lot of time creating marketing content. If you run a business, manage social media or work in marketing, you know how quickly writing can become a full-time job by itself.\n\nYou may already know exactly what you want to say, but turning that idea into a good advertisement, email or social media post takes time. Jasper can help you get past that blank page and create a strong starting point.\n\nYou can use it for advertising copy, social media posts, emails, website content, product messaging, headlines and other marketing tasks.\n\nThe best way to use it is not to let AI replace your own ideas, but to let it handle the first draft while you add your own personality and experience.",
    rating: "4.8",
    price: "Paid",
    icon: "J",
    accent: "violet",
    badge: "Editor's Pick",
    affiliateUrl: "YOUR_JASPER_AFFILIATE_LINK",
    keywords: [
      "jasper",
      "marketing",
      "marketing ai",
      "advertising",
      "ads",
      "email",
      "social media",
      "content",
      "copywriting",
    ],
  },

  {
    name: "Copy.ai",
    category: "Marketing AI",
    description:
      "If you sell something online or run a business, this one is worth a look. It can help with marketing, sales and repetitive business work.",
    longDescription:
      "Copy.ai is interesting because it goes beyond simply asking an AI to write a paragraph. It is designed around marketing, sales and business workflows.\n\nThink about the small tasks that keep coming back every week: writing outreach messages, preparing marketing material, creating sales content and organizing information. Those little tasks can add up to hours of work.\n\nCopy.ai can help with many of these jobs and can be especially useful when you want repeatable workflows instead of starting from scratch every time.\n\nFor a small business owner, that can be a big advantage. You may not have a full marketing department behind you, so having AI help with routine work can free up time for things that actually need you.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "C",
    accent: "blue",
    badge: "Popular",
    affiliateUrl: "YOUR_COPY_AI_AFFILIATE_LINK",
    keywords: [
      "copy ai",
      "copy.ai",
      "marketing",
      "sales",
      "business",
      "outreach",
      "workflow",
      "content",
    ],
  },

  {
    name: "Writesonic",
    category: "Writing & SEO",
    description:
      "Have an idea for an article but don't want to spend hours staring at a blank page? Writesonic can help you turn that idea into real content much faster.",
    longDescription:
      "Writesonic is one of the tools I'd look at first if your main goal is writing. It can help with articles, blog posts, website content, marketing copy and SEO-focused content.\n\nImagine you have a topic in mind but don't know where to start. Normally you would need to research the topic, create an outline, decide what to say and then write the entire thing. Writesonic can help you move through several of those steps much faster.\n\nIt can be useful for bloggers, business owners, marketers, website owners and creators who need to publish content regularly.\n\nYou still want to read through the result and make it your own. But instead of starting with an empty document, you can start with something you can actually work with.\n\nIf writing content is taking too much of your time, this is exactly the kind of AI tool worth trying.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "W",
    accent: "orange",
    badge: "Best for Writing",
    affiliateUrl: "YOUR_WRITESONIC_AFFILIATE_LINK",
    keywords: [
      "writesonic",
      "writing",
      "writer",
      "articles",
      "article",
      "blog",
      "blogging",
      "content",
      "seo",
    ],
  },

  {
    name: "Surfer",
    category: "SEO AI",
    description:
      "If you have a website and want people to actually find it through Google, Surfer is worth knowing. It helps you understand what your content may be missing.",
    longDescription:
      "Surfer is made for people who care about search traffic. Writing a good article is one thing, but getting people to discover that article through Google is another challenge.\n\nSurfer helps you understand what is happening around a search topic and gives you information that can help you plan and optimize your content.\n\nThis can be useful for business owners, bloggers, agencies and anyone trying to grow a website without relying completely on paid advertising.\n\nInstead of simply guessing what to write about, you can use data and recommendations to build content around topics people are actually searching for.\n\nIf Google traffic matters to your business, Surfer is definitely worth exploring.",
    rating: "4.8",
    price: "Paid",
    icon: "S",
    accent: "green",
    badge: "SEO Pick",
    affiliateUrl: "YOUR_SURFER_AFFILIATE_LINK",
    keywords: [
      "surfer",
      "seo",
      "google",
      "search",
      "search traffic",
      "rankings",
      "content optimization",
      "website",
    ],
  },

  {
    name: "ElevenLabs",
    category: "Voice AI",
    description:
      "Want a voice for your video without recording everything yourself? ElevenLabs can turn your script into natural-sounding narration.",
    longDescription:
      "ElevenLabs focuses on AI-generated voices, and this is one of those tools that makes more sense once you actually hear what it can do.\n\nInstead of recording your own voice every time you need narration, you can turn written text into spoken audio.\n\nThat can be useful for YouTube videos, social media clips, advertisements, presentations, educational content and many other projects.\n\nThe voices can sound much more natural than the robotic text-to-speech systems people remember from years ago. You can work with different voices and languages depending on your project.\n\nIf you make videos but don't always want to be behind the microphone, this can save a lot of time.",
    rating: "4.9",
    price: "Free / Paid",
    icon: "11",
    accent: "dark",
    badge: "Top Voice AI",
    affiliateUrl: "YOUR_ELEVENLABS_AFFILIATE_LINK",
    keywords: [
      "elevenlabs",
      "eleven labs",
      "voice",
      "voice ai",
      "audio",
      "speech",
      "text to speech",
      "tts",
      "narration",
    ],
  },

  {
    name: "HeyGen",
    category: "Video AI",
    description:
      "Need a video but don't feel like getting in front of a camera? HeyGen lets you create videos using AI avatars and your own script.",
    longDescription:
      "HeyGen is interesting for one simple reason: you can create certain types of videos without setting up a camera, lights and microphone every time.\n\nYou provide the script and choose how you want the video to look, and the platform can generate a video using an AI avatar.\n\nThis can be useful for presentations, training videos, marketing content, product explanations and social media.\n\nIt is also useful for creators who want to experiment with video but are not comfortable being on camera.\n\nIt will not replace every type of professional video production, but for the right kind of content it can make the process dramatically easier.",
    rating: "4.8",
    price: "Free / Paid",
    icon: "H",
    accent: "purple",
    badge: "Video Pick",
    affiliateUrl: "YOUR_HEYGEN_AFFILIATE_LINK",
    keywords: [
      "heygen",
      "video",
      "video ai",
      "avatar",
      "ai avatar",
      "youtube",
      "presentation",
      "marketing video",
    ],
  },

  {
    name: "Pictory",
    category: "Video AI",
    description:
      "Have an article, script or idea that you wish was a video? Pictory is built around turning written content into engaging videos.",
    longDescription:
      "Pictory is aimed at people who already have content but want to turn that content into video.\n\nMaybe you have a blog post, a script, a presentation or simply an idea. Instead of building the entire video manually from scratch, Pictory can help transform written material into a video format.\n\nThat can be particularly useful for marketers and creators who need to produce a lot of short-form content.\n\nOne piece of written content can become another format without you having to rebuild everything from zero.\n\nIf you want to post more video but editing is the part that keeps stopping you, Pictory is worth exploring.",
    rating: "4.6",
    price: "Paid",
    icon: "P",
    accent: "red",
    affiliateUrl: "YOUR_PICTORY_AFFILIATE_LINK",
    keywords: [
      "pictory",
      "video",
      "video ai",
      "article to video",
      "script to video",
      "content",
      "short video",
    ],
  },

  {
    name: "Descript",
    category: "Video & Audio",
    description:
      "Video editing can be a pain. Descript takes a different approach: your video becomes a document, so editing the words can also edit the video.",
    longDescription:
      "Descript is one of those tools that makes the most sense once you see the workflow.\n\nInstead of treating your video as a complicated timeline full of tiny clips, it lets you work with a transcript that looks much more like a normal document.\n\nIf you recorded an interview and someone said something you want to remove, for example, you can edit the transcript instead of searching through the entire video timeline.\n\nIt can be useful for podcasts, YouTube videos, interviews, social media clips, tutorials and other talking-based content.\n\nIf traditional video editing feels unnecessarily complicated, Descript is definitely worth trying.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "D",
    accent: "pink",
    badge: "Creator Pick",
    affiliateUrl: "YOUR_DESCRIPT_AFFILIATE_LINK",
    keywords: [
      "descript",
      "video",
      "video editing",
      "audio",
      "podcast",
      "youtube",
      "transcript",
      "editing",
    ],
  },

  {
    name: "Murf",
    category: "Voice AI",
    description:
      "Need a professional voiceover but don't have a voice actor or recording setup? Murf can help turn your script into polished narration.",
    longDescription:
      "Murf is an AI voice platform designed for people creating professional-looking content such as presentations, advertisements, training material and videos.\n\nInstead of recording every sentence yourself or hiring a voice actor for every small project, you can start with your written script and create a voiceover using AI.\n\nThis can be especially useful when you need to make changes. If you recorded an entire video yourself and later changed one sentence, you normally have to record that sentence again.\n\nWith an AI voice workflow, changing the script can be much simpler.\n\nIf voiceovers are something you need but recording them yourself is slowing you down, Murf is worth taking a look at.",
    rating: "4.7",
    price: "Free / Paid",
    icon: "M",
    accent: "teal",
    affiliateUrl: "YOUR_MURF_AFFILIATE_LINK",
    keywords: [
      "murf",
      "voice",
      "voice ai",
      "voiceover",
      "voice over",
      "audio",
      "narration",
      "text to speech",
    ],
  },

  {
    name: "ClickUp",
    category: "Productivity AI",
    description:
      "If your work is spread across notes, tasks and endless to-do lists, ClickUp is worth checking out. It puts a lot of that work in one place.",
    longDescription:
      "ClickUp is built around organizing work, projects and tasks, with AI features added into that workflow.\n\nIt can be useful if you constantly have information scattered across different apps and struggle to keep track of what needs to happen next.\n\nYou can use it for projects, tasks, documents, team collaboration and planning. AI features can help with writing, summarizing information and working with the content inside your workspace.\n\nFor a small business, having everything in one place can make a big difference.\n\nIf your current system feels messy and you are managing multiple projects, ClickUp is worth exploring.",
    rating: "4.8",
    price: "Free / Paid",
    icon: "✓",
    accent: "indigo",
    badge: "Productivity Pick",
    affiliateUrl: "YOUR_CLICKUP_AFFILIATE_LINK",
    keywords: [
      "clickup",
      "productivity",
      "tasks",
      "task management",
      "projects",
      "project management",
      "planning",
      "business",
    ],
  },
];

function App() {
  const [expandedTool, setExpandedTool] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredTools = useMemo(() => {
    if (!normalizedQuery) {
      return tools;
    }

    return tools.filter((tool) => {
      const searchableText = [
        tool.name,
        tool.category,
        tool.description,
        tool.longDescription,
        ...tool.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  const openTool = (url: string) => {
    if (!url || url.startsWith("YOUR_")) {
      window.alert(
        "The partner link for this tool has not been connected yet."
      );
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const goToTool = (toolName: string) => {
    const element = document.getElementById(
      `tool-${toolName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
    );

    if (!element) return;

    setExpandedTool(null);

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSearch = () => {
    setHasSearched(true);
    setExpandedTool(null);

    window.setTimeout(() => {
      document.getElementById("search-results")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const handleSearchKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setHasSearched(false);
    setExpandedTool(null);
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
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder="What do you want AI to help with?"
                aria-label="Search for an AI tool"
              />

              {searchQuery && (
                <button
                  type="button"
                  className="search-clear"
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}

              <button type="button" onClick={handleSearch}>
                Find AI
                <span>→</span>
              </button>
            </div>

            <div className="popular-searches">
              <span>Popular:</span>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("writing");
                  setHasSearched(true);
                  window.setTimeout(
                    () => scrollToSection("search-results"),
                    50
                  );
                }}
              >
                Writing
              </button>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("marketing");
                  setHasSearched(true);
                  window.setTimeout(
                    () => scrollToSection("search-results"),
                    50
                  );
                }}
              >
                Marketing
              </button>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("video");
                  setHasSearched(true);
                  window.setTimeout(
                    () => scrollToSection("search-results"),
                    50
                  );
                }}
              >
                Video
              </button>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("voice");
                  setHasSearched(true);
                  window.setTimeout(
                    () => scrollToSection("search-results"),
                    50
                  );
                }}
              >
                Voice
              </button>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("seo");
                  setHasSearched(true);
                  window.setTimeout(
                    () => scrollToSection("search-results"),
                    50
                  );
                }}
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

        {/* CATEGORIES */}

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
                type="button"
                className="category-card"
                key={category.title}
                onClick={() => goToTool(category.target)}
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

        {/* SEARCH RESULTS / AI TOOLS */}

        <section
          className="section tools-section"
          id="search-results"
        >
          <div className="section-header">
            <div>
              <span className="section-kicker">
                {hasSearched ? "SEARCH RESULTS" : "EDITOR'S PICKS"}
              </span>

              <h2>
                {hasSearched && normalizedQuery
                  ? `Results for "${searchQuery.trim()}"`
                  : "AI tools worth knowing"}
              </h2>
            </div>

            <span className="text-link">
              {hasSearched
                ? `${filteredTools.length} ${
                    filteredTools.length === 1 ? "tool" : "tools"
                  } found`
                : "10 curated tools"}
            </span>
          </div>

          {hasSearched && normalizedQuery && filteredTools.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">⌕</div>

              <h3>No AI tools found</h3>

              <p>
                We couldn't find a tool matching "
                <strong>{searchQuery.trim()}</strong>".
                Try a different search such as writing, video, voice,
                marketing or SEO.
              </p>

              <button
                type="button"
                className="no-results-button"
                onClick={clearSearch}
              >
                Show all AI tools
                <span>→</span>
              </button>
            </div>
          ) : (
            <div className="tools-grid">
              {filteredTools.map((tool) => {
                const toolId = `tool-${tool.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`;

                const isExpanded = expandedTool === tool.name;

                return (
                  <article
                    className={`tool-card ${
                      isExpanded ? "expanded" : ""
                    }`}
                    key={tool.name}
                    id={toolId}
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

                      <button
                        type="button"
                        className={`learn-more-button ${
                          isExpanded ? "is-open" : ""
                        }`}
                        onClick={() =>
                          setExpandedTool(
                            isExpanded ? null : tool.name
                          )
                        }
                        aria-expanded={isExpanded}
                      >
                        <span>
                          {isExpanded
                            ? "Show less"
                            : "Read more"}
                        </span>

                        <span className="learn-more-arrow">
                          {isExpanded ? "↑" : "↓"}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="tool-long-description">
                          {tool.longDescription
                            .split("\n\n")
                            .map((paragraph, index) => (
                              <p key={index}>
                                {paragraph}
                              </p>
                            ))}
                        </div>
                      )}
                    </div>

                    <div className="tool-bottom">
                      <div>
                        <span className="small-label">
                          PRICE
                        </span>

                        <strong>{tool.price}</strong>
                      </div>

                      <button
                        type="button"
                        className="tool-button"
                        onClick={() =>
                          openTool(tool.affiliateUrl)
                        }
                      >
                        Try {tool.name}

                        <span>→</span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
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
              We are building a simple AI finder that will help
              you discover the best tool for your specific goal.
            </p>

            <button
              type="button"
              className="finder-button"
              onClick={() => scrollToSection("categories")}
            >
              Explore AI tools
              <span>→</span>
            </button>
          </div>

          <div className="finder-decoration" aria-hidden="true">
            <div className="finder-orb">
              <span>✦</span>
            </div>

            <div className="floating-card card-one">
              <span>✍️</span>
              <span>Writing</span>
              <strong>Top tools</strong>
            </div>

            <div className="floating-card card-two">
              <span>🎬</span>
              <span>Video</span>
              <strong>Top tools</strong>
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
                No endless lists of random AI products. We focus
                on tools that solve real problems.
              </p>
            </div>

            <div className="why-card">
              <div className="why-number">02</div>

              <h3>Clear choices</h3>

              <p>
                See what each tool does, who it is for and whether
                it fits your needs.
              </p>
            </div>

            <div className="why-card">
              <div className="why-number">03</div>

              <h3>Choose smarter</h3>

              <p>
                Spend less time searching and more time actually
                using AI.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <a
              className="brand footer-brand"
              href="#explore"
            >
              <span className="brand-mark">C</span>

              <span>
                Choi
                <span className="brand-highlight">
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
