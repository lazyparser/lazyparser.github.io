(function () {
  var translations = {
    en: {
      "theme.dark": "Dark mode",
      "theme.light": "Light mode",
      "theme.switchLight": "Switch to light mode",
      "theme.switchDark": "Switch to dark mode",
      footer: "Made with curiosity and open source.",
      "hero.eyebrow": "OPEN SOURCE · COMPILERS · RUNTIMES",
      "hero.greeting": "Hello, I'm",
      "hero.intro": "I build communities and work on open source compilers, simulators, and runtime systems.",
      "hero.github": "Explore my work",
      "hero.talks": "Talks & presentations",
      "hero.role.label": "FOCUS",
      "hero.role.value": "Compiler engineering & open source",
      "hero.community.label": "COMMUNITY",
      "hero.riscv.label": "ROLE",
      "hero.riscv.value": "RISC-V Ambassador",
      "work.eyebrow": "SELECTED WORK",
      "work.title": "Building in the open.",
      "osdt.title": "Open Source Developer Tools",
      "osdt.copy": "I help grow a community spanning compilers, runtimes, kernels, simulators, static analysis, browsers, and operating systems.",
      "plct.copy": "Co-founder and project director of PLCT Lab from 2019 to October 2025, working on open source compilers, simulators, and runtimes.",
      "plct.blog": "PLCT Blog",
      "plct.repos": "Open source projects",
      "writing.title": "HelloCompiler",
      "writing.copy": "Notes on compilers and software engineering, collected since 2010. The archive is primarily in Chinese.",
      "writing.archive": "Browse the blog archive",
      "writing.book": "Minimalist team leader",
      "connect.eyebrow": "LET'S CONNECT",
      "connect.title": "Good ideas grow together.",
      "connect.copy": "Public talks, community projects, and opportunities to work together.",
      "connect.talks": "Talks & presentations",
      "connect.hiring": "Remote internships & jobs",
      "blog.eyebrow": "BLOG ARCHIVE",
      "blog.title": "HelloCompiler / The long road of compilers",
      "blog.intro": "Notes on compilers and software engineering, since 2010.",
      "blog.articles": "Blog posts",
      "blog.history": "About the archive"
    },
    zh: {
      "theme.dark": "深色模式",
      "theme.light": "浅色模式",
      "theme.switchLight": "切换到浅色模式",
      "theme.switchDark": "切换到深色模式",
      footer: "保持好奇，持续开源。",
      "hero.eyebrow": "开源 · 编译器 · 运行时",
      "hero.greeting": "你好，我是",
      "hero.intro": "我致力于开源编译器、模拟器和运行时系统，也参与开源社区建设。",
      "hero.github": "探索我的项目",
      "hero.talks": "演讲与分享",
      "hero.role.label": "关注领域",
      "hero.role.value": "编译器工程与开源",
      "hero.community.label": "社区",
      "hero.riscv.label": "身份",
      "hero.riscv.value": "RISC-V 大使",
      "work.eyebrow": "精选项目",
      "work.title": "在开放中创造。",
      "osdt.title": "开源开发工具社区",
      "osdt.copy": "我参与建设涵盖编译器、运行时、内核、模拟器、静态分析、浏览器和操作系统等领域的社区。",
      "plct.copy": "2019 年至 2025 年 10 月担任 PLCT Lab 联合创始人及项目总监，致力于开源编译器、模拟器和运行时。",
      "plct.blog": "PLCT 博客",
      "plct.repos": "开源项目",
      "writing.title": "编译路漫漫",
      "writing.copy": "自 2010 年以来记录编译器与软件工程札记，博客主要以中文撰写。",
      "writing.archive": "浏览博客归档",
      "writing.book": "极简项目管理",
      "connect.eyebrow": "保持联系",
      "connect.title": "好想法，同行共创。",
      "connect.copy": "了解公开演讲、社区项目，以及合作机会。",
      "connect.talks": "演讲与分享",
      "connect.hiring": "远程实习与全职机会",
      "blog.eyebrow": "博客归档",
      "blog.title": "编译路漫漫 / HelloCompiler.com",
      "blog.intro": "编译器与软件工程札记，始于 2010 年。",
      "blog.articles": "博客文章",
      "blog.history": "历史数据"
    }
  };

  var root = document.documentElement;
  var themeButton = document.querySelector(".theme-toggle");
  var localeButtons = document.querySelectorAll("[data-locale]");
  var storage;

  try {
    storage = window.localStorage;
  } catch (error) {
    storage = null;
  }

  function readPreference(key) {
    try {
      return storage && storage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function savePreference(key, value) {
    try {
      if (storage) storage.setItem(key, value);
    } catch (error) {
      return;
    }
  }

  function setLocale(locale) {
    var selected = translations[locale] ? locale : "en";
    root.lang = selected;
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var value = translations[selected][element.getAttribute("data-i18n")];
      if (!value) return;
      var textNode = Array.prototype.find.call(element.childNodes, function (node) {
        return node.nodeType === Node.TEXT_NODE && node.nodeValue.trim();
      });
      if (textNode) {
        textNode.nodeValue = value;
      } else {
        element.textContent = value;
      }
    });
    localeButtons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.locale === selected));
    });
    if (themeButton) {
      var theme = root.dataset.theme === "light" ? "light" : "dark";
      themeButton.querySelector("[data-i18n]").textContent = translations[selected]["theme." + theme];
      themeButton.setAttribute(
        "aria-label",
        translations[selected][theme === "light" ? "theme.switchDark" : "theme.switchLight"]
      );
    }
    savePreference("site-locale", selected);
  }

  function setTheme(theme) {
    var selected = theme === "light" ? "light" : "dark";
    root.dataset.theme = selected;
    if (themeButton) {
      themeButton.setAttribute("aria-pressed", String(selected === "light"));
      themeButton.setAttribute(
        "aria-label",
        translations[root.lang || "en"][selected === "light" ? "theme.switchDark" : "theme.switchLight"]
      );
      themeButton.querySelector("[data-i18n]").textContent =
        translations[root.lang || "en"]["theme." + selected];
    }
    savePreference("site-theme", selected);
  }

  var preferredTheme = readPreference("site-theme");
  if (preferredTheme !== "light" && preferredTheme !== "dark") {
    preferredTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }
  setTheme(preferredTheme);
  setLocale(readPreference("site-locale") || "en");

  localeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLocale(button.dataset.locale);
    });
  });

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      setTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });
  }
})();
