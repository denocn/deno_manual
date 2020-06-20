import Ga from '/_ga.js';
export default {
    'config': {
        "srcDir": ".",
        "publicDir": "public",
        "ignore": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        "base": "/",
        "theme": "docs",
        "plugins": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        "watch": false,
        "serve": false,
        "port": 8000,
        "title": "Deno 手册",
        "sidebar": [
            "README.md",
            "introduction.md",
            {
                "link": "getting_started.md",
                "children": [
                    "getting_started/installation.md",
                    "getting_started/setup_your_environment.md",
                    "getting_started/first_steps.md",
                    "getting_started/permissions.md",
                    "getting_started/typescript.md",
                    "getting_started/webassembly.md"
                ]
            },
            {
                "link": "runtime.md",
                "children": [
                    "runtime/stability.md",
                    "runtime/program_lifecycle.md",
                    "runtime/compiler_apis.md",
                    "runtime/workers.md"
                ]
            },
            {
                "link": "linking_to_external_code.md",
                "children": [
                    "linking_to_external_code/reloading_modules.md",
                    "linking_to_external_code/integrity_checking.md",
                    "linking_to_external_code/proxies.md",
                    "linking_to_external_code/import_maps.md"
                ]
            },
            {
                "link": "standard_library.md"
            },
            {
                "link": "testing.md"
            },
            {
                "link": "tools.md",
                "children": [
                    "tools/debugger.md",
                    "tools/script_installer.md",
                    "tools/formatter.md",
                    "tools/bundler.md",
                    "tools/documentation_generator.md",
                    "tools/dependency_inspector.md"
                ]
            },
            {
                "link": "embedding_deno.md"
            },
            {
                "link": "contributing.md",
                "children": [
                    "contributing/building_from_source.md",
                    "contributing/development_tools.md",
                    "contributing/style_guide.md",
                    "contributing/architecture.md"
                ]
            },
            {
                "link": "examples.md",
                "children": [
                    "examples/unix_cat.md",
                    "examples/file_server.md",
                    "examples/tcp_echo.md",
                    "examples/subprocess.md",
                    "examples/permissions.md",
                    "examples/os_signals.md",
                    "examples/file_system_events.md",
                    "examples/testing_if_main.md"
                ]
            }
        ],
        "nav": [
            {
                "text": "GitHub",
                "link": "https://github.com/denocn/deno_manual"
            },
            {
                "text": "社区",
                "link": "http://deno.js.cn"
            }
        ],
        "ga": {
            "id": "UA-123999279-4"
        }
    },
    'pagePath': "testing.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "testing.html",
    'title': "测试",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>测试</h1>\n<p>Deno 有一个内置的测试器，可以用来测试 JavaScript 或 TypeScript 代码。</p>\n<h2 id="%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95">编写测试<a class="anchor" href="#%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95">§</a></h2>\n<p>要定义测试，需要使用要测试的名称和函数调用 <code>Deno.test</code>。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">!==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token known-class-name class-name">Error</span><span class="token punctuation">(</span><span class="token string">"x should be equal to 3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>在 <a href="https://deno.land/std/testing">https://deno.land/std/testing</a> 上有一些有用的断言实用程序，可以简化测试：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> assertEquals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std/testing/asserts.ts">https://deno.land/std/testing/asserts.ts</a>"</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="%E5%BC%82%E6%AD%A5%E5%87%BD%E6%95%B0">异步函数<a class="anchor" href="#%E5%BC%82%E6%AD%A5%E5%87%BD%E6%95%B0">§</a></h3>\n<p>您还可以通过传递一个测试函数来测试异步代码，该函数返回一个 promise。\n为此，您可以在定义函数时使用 <code>async</code> 关键字：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> delay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std/async/delay.ts">https://deno.land/std/async/delay.ts</a>"</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token string">"async hello world"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// await some async task</span>\n  <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">!==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token known-class-name class-name">Error</span><span class="token punctuation">(</span><span class="token string">"x should be equal to 3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="%E8%B5%84%E6%BA%90%E5%92%8C%E5%BC%82%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%B8%85%E7%90%86%E5%99%A8">资源和异步操作清理器<a class="anchor" href="#%E8%B5%84%E6%BA%90%E5%92%8C%E5%BC%82%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%B8%85%E7%90%86%E5%99%A8">§</a></h3>\n<p>Deno 中的某些操作在资源表（<a href="./contributing/architecture.html">在此处了解更多</a>）中创建资源。\n这些资源应该在使用完后关闭。</p>\n<p>对于每个测试定义，测试器会检查此测试中创建的所有资源是否已关闭，以防止资源“泄漏”。\n默认情况下，这对所有测试都是启用的，但可以通过在测试定义中将 <code>sanitizeResources</code> 布尔值设置为 false 来禁用。</p>\n<p>对于异步操作（如与文件系统交互）也是如此。测试器检查您在测试中启动的每个操作是否在测试结束之前完成。默认情况下，这对所有测试都是启用的，但可以通过在测试定义中将 <code>sanitizeps</code> 布尔值设置为 false 来禁用。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">"leaky test"</span><span class="token punctuation">,</span>\n  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">open</span><span class="token punctuation">(</span><span class="token string">"hello.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  sanitizeResources<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  sanitizeOps<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="%E5%BF%BD%E7%95%A5%E6%B5%8B%E8%AF%95">忽略测试<a class="anchor" href="#%E5%BF%BD%E7%95%A5%E6%B5%8B%E8%AF%95">§</a></h3>\n<p>有时您希望忽略基于某种条件的测试（例如您只希望在 Windows 上运行测试）。\n为此，您可以使用 <code>ignore</code> 测试定义中的布尔值。\n如果它被设置为 true，则测试将被跳过。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">"do macOS feature"</span><span class="token punctuation">,</span>\n  ignore<span class="token operator">:</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token property-access">build</span><span class="token punctuation">.</span><span class="token property-access">os</span> <span class="token operator">!==</span> <span class="token string">"darwin"</span><span class="token punctuation">,</span>\n  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">doMacOSFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E8%BF%90%E8%A1%8C%E6%B5%8B%E8%AF%95">运行测试<a class="anchor" href="#%E8%BF%90%E8%A1%8C%E6%B5%8B%E8%AF%95">§</a></h2>\n<p>要运行测试，请使用包含您测试函数的文件调用 <code>deno test</code> 。</p>\n<pre class="language-shell"><code class="language-shell">deno <span class="token builtin class-name">test</span> my_test.ts\n</code></pre>\n<p>您还可以省略文件名，在这种情况下，当前目录（递归）下所有与通配符 <code>{*_,}test.{js,ts,jsx,tsx}</code> 匹配的测试将会被运行。\n如果传递一个目录，则该目录中与此 glob 匹配的所有文件将运行。</p>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95">编写测试</a><ol><li><a href="#%E5%BC%82%E6%AD%A5%E5%87%BD%E6%95%B0">异步函数</a></li><li><a href="#%E8%B5%84%E6%BA%90%E5%92%8C%E5%BC%82%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%B8%85%E7%90%86%E5%99%A8">资源和异步操作清理器</a></li><li><a href="#%E5%BF%BD%E7%95%A5%E6%B5%8B%E8%AF%95">忽略测试</a></li></ol></li><li><a href="#%E8%BF%90%E8%A1%8C%E6%B5%8B%E8%AF%95">运行测试</a></li></ol></nav>'
        } }),
    'sidebar': [
        {
            "text": "Deno 中文手册",
            "link": "index.html"
        },
        {
            "text": "介绍",
            "link": "introduction.html"
        },
        {
            "link": "getting_started.html",
            "children": [
                {
                    "text": "安装",
                    "link": "getting_started/installation.html"
                },
                {
                    "text": "设置您的环境",
                    "link": "getting_started/setup_your_environment.html"
                },
                {
                    "text": "第一步",
                    "link": "getting_started/first_steps.html"
                },
                {
                    "text": "权限",
                    "link": "getting_started/permissions.html"
                },
                {
                    "text": "使用 TypeScript",
                    "link": "getting_started/typescript.html"
                },
                {
                    "text": "WASM 支持",
                    "link": "getting_started/webassembly.html"
                }
            ],
            "text": "入门"
        },
        {
            "link": "runtime.html",
            "children": [
                {
                    "text": "稳定性",
                    "link": "runtime/stability.html"
                },
                {
                    "text": "程序生命周期",
                    "link": "runtime/program_lifecycle.html"
                },
                {
                    "text": "编译器 API",
                    "link": "runtime/compiler_apis.html"
                },
                {
                    "text": "Worker",
                    "link": "runtime/workers.html"
                }
            ],
            "text": "运行时"
        },
        {
            "link": "linking_to_external_code.html",
            "children": [
                {
                    "text": "重新加载特定的模块",
                    "link": "linking_to_external_code/reloading_modules.html"
                },
                {
                    "text": "完整性检查与锁定文件",
                    "link": "linking_to_external_code/integrity_checking.html"
                },
                {
                    "text": "代理（Proxies）",
                    "link": "linking_to_external_code/proxies.html"
                },
                {
                    "text": "导入映射（Import maps）",
                    "link": "linking_to_external_code/import_maps.html"
                }
            ],
            "text": "与外部代码连接"
        },
        {
            "link": "standard_library.html",
            "text": "标准库"
        },
        {
            "link": "testing.html",
            "text": "测试"
        },
        {
            "link": "tools.html",
            "children": [
                {
                    "text": "调试器 (debugger)",
                    "link": "tools/debugger.html"
                },
                {
                    "text": "脚本安装器",
                    "link": "tools/script_installer.html"
                },
                {
                    "text": "代码格式化",
                    "link": "tools/formatter.html"
                },
                {
                    "text": "打包",
                    "link": "tools/bundler.html"
                },
                {
                    "text": "文档生成器",
                    "link": "tools/documentation_generator.html"
                },
                {
                    "text": "依赖检查器",
                    "link": "tools/dependency_inspector.html"
                }
            ],
            "text": "内置工具"
        },
        {
            "link": "embedding_deno.html",
            "text": "嵌入式 Deno"
        },
        {
            "link": "contributing.html",
            "children": [
                {
                    "text": "从源码构建",
                    "link": "contributing/building_from_source.html"
                },
                {
                    "text": "测试和工具",
                    "link": "contributing/development_tools.html"
                },
                {
                    "text": "Deno 风格指南",
                    "link": "contributing/style_guide.html"
                },
                {
                    "text": "内部细节",
                    "link": "contributing/architecture.html"
                }
            ],
            "text": "贡献"
        },
        {
            "link": "examples.html",
            "children": [
                {
                    "text": "Unix cat",
                    "link": "examples/unix_cat.html"
                },
                {
                    "text": "文件服务器",
                    "link": "examples/file_server.html"
                },
                {
                    "text": "TCP echo",
                    "link": "examples/tcp_echo.html"
                },
                {
                    "text": "运行子进程",
                    "link": "examples/subprocess.html"
                },
                {
                    "text": "检查与放弃权限",
                    "link": "examples/permissions.html"
                },
                {
                    "text": "处理系统信号",
                    "link": "examples/os_signals.html"
                },
                {
                    "link": "examples/file_system_events.html"
                },
                {
                    "text": "测试当前文件是否为主程序",
                    "link": "examples/testing_if_main.html"
                }
            ],
            "text": "示例"
        }
    ],
    'ga': React.createElement(Ga, { id: "UA-123999279-4" })
};
