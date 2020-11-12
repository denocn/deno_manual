import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "title": "使用 TypeScript",
        "link": "getting_started/typescript.html"
    },
    'next': {
        "link": "runtime.html",
        "title": "运行时"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "getting_started/webassembly.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "getting_started/webassembly.html",
    'title': "WebAssembly 支持",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>WebAssembly 支持</h1>\n<p>Deno 能够运行 <a href="https://webassembly.org/">WebAssembly</a> 二进制文件。</p>\n<!-- dprint-ignore -->\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> wasmCode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">115</span><span class="token punctuation">,</span> <span class="token number">109</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">133</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">127</span><span class="token punctuation">,</span>\n  <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">132</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">131</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">129</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">145</span><span class="token punctuation">,</span>\n  <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">109</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">109</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">,</span> <span class="token number">114</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">109</span><span class="token punctuation">,</span> <span class="token number">97</span><span class="token punctuation">,</span>\n  <span class="token number">105</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">138</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">132</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">11</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> wasmModule <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebAssembly<span class="token punctuation">.</span>Module</span><span class="token punctuation">(</span>wasmCode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> wasmInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebAssembly<span class="token punctuation">.</span>Instance</span><span class="token punctuation">(</span>wasmModule<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>wasmInstance<span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token punctuation">.</span><span class="token method function property-access">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>'
        } }),
    'head': React.createElement("link", { href: "/favicon.svg", rel: "icon", type: "image/svg+xml" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "WebAssembly \u652F\u6301"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Deno 能够运行 <a href="https://webassembly.org/">WebAssembly</a> 二进制文件。</p>\n<!-- dprint-ignore -->\n<pre class="language-js"><code class="language-js"><span class="token keyword">const</span> wasmCode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">115</span><span class="token punctuation">,</span> <span class="token number">109</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">133</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">127</span><span class="token punctuation">,</span>\n  <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">132</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">131</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">129</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">145</span><span class="token punctuation">,</span>\n  <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">109</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">109</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">,</span> <span class="token number">114</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">109</span><span class="token punctuation">,</span> <span class="token number">97</span><span class="token punctuation">,</span>\n  <span class="token number">105</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">138</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">132</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">11</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> wasmModule <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebAssembly<span class="token punctuation">.</span>Module</span><span class="token punctuation">(</span>wasmCode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> wasmInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebAssembly<span class="token punctuation">.</span>Instance</span><span class="token punctuation">(</span>wasmModule<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>wasmInstance<span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token punctuation">.</span><span class="token method function property-access">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>'
        } }),
    'toc': null,
    'author': "迷渡",
    'contributors': [
        "迷渡"
    ],
    'date': "2020-11-12T01:44:32.000Z",
    'updated': null,
    'excerpt': "Deno 能够运行 WebAssembly 二进制文件。 const wasmCode = new Uint8Array([ 0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127, 3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112...",
    'cover': undefined,
    'sidebar': [
        {
            "title": "Deno 中文手册",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "title": "介绍",
            "link": "introduction.html",
            "pagePath": "introduction.md"
        },
        {
            "link": "getting_started.html",
            "children": [
                {
                    "title": "安装",
                    "link": "getting_started/installation.html",
                    "pagePath": "getting_started/installation.md"
                },
                {
                    "title": "设置您的环境",
                    "link": "getting_started/setup_your_environment.html",
                    "pagePath": "getting_started/setup_your_environment.md"
                },
                {
                    "title": "第一步",
                    "link": "getting_started/first_steps.html",
                    "pagePath": "getting_started/first_steps.md"
                },
                {
                    "title": "命令行界面",
                    "link": "getting_started/command_line_interface.html",
                    "pagePath": "getting_started/command_line_interface.md"
                },
                {
                    "title": "权限",
                    "link": "getting_started/permissions.html",
                    "pagePath": "getting_started/permissions.md"
                },
                {
                    "title": "使用 TypeScript",
                    "link": "getting_started/typescript.html",
                    "pagePath": "getting_started/typescript.md"
                },
                {
                    "title": "WebAssembly 支持",
                    "link": "getting_started/webassembly.html",
                    "pagePath": "getting_started/webassembly.md"
                }
            ],
            "title": "入门",
            "pagePath": "getting_started.md"
        },
        {
            "link": "runtime.html",
            "children": [
                {
                    "title": "稳定性",
                    "link": "runtime/stability.html",
                    "pagePath": "runtime/stability.md"
                },
                {
                    "title": "程序生命周期",
                    "link": "runtime/program_lifecycle.html",
                    "pagePath": "runtime/program_lifecycle.md"
                },
                {
                    "title": "编译器 API",
                    "link": "runtime/compiler_apis.html",
                    "pagePath": "runtime/compiler_apis.md"
                },
                {
                    "title": "Worker",
                    "link": "runtime/workers.html",
                    "pagePath": "runtime/workers.md"
                }
            ],
            "title": "运行时",
            "pagePath": "runtime.md"
        },
        {
            "link": "linking_to_external_code.html",
            "children": [
                {
                    "title": "重新加载特定的模块",
                    "link": "linking_to_external_code/reloading_modules.html",
                    "pagePath": "linking_to_external_code/reloading_modules.md"
                },
                {
                    "title": "完整性检查与锁定文件",
                    "link": "linking_to_external_code/integrity_checking.html",
                    "pagePath": "linking_to_external_code/integrity_checking.md"
                },
                {
                    "title": "代理（Proxies）",
                    "link": "linking_to_external_code/proxies.html",
                    "pagePath": "linking_to_external_code/proxies.md"
                },
                {
                    "title": "导入映射（Import maps）",
                    "link": "linking_to_external_code/import_maps.html",
                    "pagePath": "linking_to_external_code/import_maps.md"
                }
            ],
            "title": "与外部代码连接",
            "pagePath": "linking_to_external_code.md"
        },
        {
            "link": "standard_library.html",
            "title": "标准库",
            "pagePath": "standard_library.md"
        },
        {
            "link": "testing.html",
            "children": [
                {
                    "title": "断言",
                    "link": "testing/assertions.html",
                    "pagePath": "testing/assertions.md"
                }
            ],
            "title": "测试",
            "pagePath": "testing.md"
        },
        {
            "link": "tools.html",
            "children": [
                {
                    "title": "调试器 (debugger)",
                    "link": "tools/debugger.html",
                    "pagePath": "tools/debugger.md"
                },
                {
                    "title": "脚本安装器",
                    "link": "tools/script_installer.html",
                    "pagePath": "tools/script_installer.md"
                },
                {
                    "title": "代码格式化",
                    "link": "tools/formatter.html",
                    "pagePath": "tools/formatter.md"
                },
                {
                    "title": "打包",
                    "link": "tools/bundler.html",
                    "pagePath": "tools/bundler.md"
                },
                {
                    "title": "文档生成器",
                    "link": "tools/documentation_generator.html",
                    "pagePath": "tools/documentation_generator.md"
                },
                {
                    "title": "依赖检查器",
                    "link": "tools/dependency_inspector.html",
                    "pagePath": "tools/dependency_inspector.md"
                },
                {
                    "title": "Linter",
                    "link": "tools/linter.html",
                    "pagePath": "tools/linter.md"
                }
            ],
            "title": "内置工具",
            "pagePath": "tools.md"
        },
        {
            "link": "embedding_deno.html",
            "title": "嵌入式 Deno",
            "pagePath": "embedding_deno.md"
        },
        {
            "link": "contributing.html",
            "children": [
                {
                    "title": "从源码构建",
                    "link": "contributing/building_from_source.html",
                    "pagePath": "contributing/building_from_source.md"
                },
                {
                    "title": "测试和工具",
                    "link": "contributing/development_tools.html",
                    "pagePath": "contributing/development_tools.md"
                },
                {
                    "title": "Deno 风格指南",
                    "link": "contributing/style_guide.html",
                    "pagePath": "contributing/style_guide.md"
                },
                {
                    "title": "内部细节",
                    "link": "contributing/architecture.html",
                    "pagePath": "contributing/architecture.md"
                }
            ],
            "title": "贡献",
            "pagePath": "contributing.md"
        },
        {
            "link": "examples.html",
            "children": [
                {
                    "title": "Unix cat",
                    "link": "examples/unix_cat.html",
                    "pagePath": "examples/unix_cat.md"
                },
                {
                    "title": "文件服务器",
                    "link": "examples/file_server.html",
                    "pagePath": "examples/file_server.md"
                },
                {
                    "title": "TCP echo",
                    "link": "examples/tcp_echo.html",
                    "pagePath": "examples/tcp_echo.md"
                },
                {
                    "title": "运行子进程",
                    "link": "examples/subprocess.html",
                    "pagePath": "examples/subprocess.md"
                },
                {
                    "title": "检查与放弃权限",
                    "link": "examples/permissions.html",
                    "pagePath": "examples/permissions.md"
                },
                {
                    "title": "处理系统信号",
                    "link": "examples/os_signals.html",
                    "pagePath": "examples/os_signals.md"
                },
                {
                    "title": "文件系统事件",
                    "link": "examples/file_system_events.html",
                    "pagePath": "examples/file_system_events.md"
                },
                {
                    "title": "测试当前文件是否为主程序",
                    "link": "examples/testing_if_main.html",
                    "pagePath": "examples/testing_if_main.md"
                }
            ],
            "title": "示例",
            "pagePath": "examples.md"
        }
    ]
};
