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
                    "getting_started/command_line_interface.md",
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
                "link": "testing.md",
                "children": [
                    "testing/assertions.md"
                ]
            },
            {
                "link": "tools.md",
                "children": [
                    "tools/debugger.md",
                    "tools/script_installer.md",
                    "tools/formatter.md",
                    "tools/bundler.md",
                    "tools/documentation_generator.md",
                    "tools/dependency_inspector.md",
                    "tools/linter.md"
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
    'pagePath': "contributing/architecture.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "contributing/architecture.html",
    'title': "内部细节",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>内部细节</h1>\n<h2 id="deno-%E5%92%8C-linux-%E7%B1%BB%E6%AF%94">Deno 和 Linux 类比<a class="anchor" href="#deno-%E5%92%8C-linux-%E7%B1%BB%E6%AF%94">§</a></h2>\n<table>\n<thead>\n<tr>\n<th style="text-align:right"><strong>Linux</strong></th>\n<th style="text-align:left"><strong>Deno</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:right">进程 (Processes)</td>\n<td style="text-align:left">Web Workers</td>\n</tr>\n<tr>\n<td style="text-align:right">系统调用 (Syscalls)</td>\n<td style="text-align:left">Ops</td>\n</tr>\n<tr>\n<td style="text-align:right">文件描述符 (fd)</td>\n<td style="text-align:left"><a href="#%E8%B5%84%E6%BA%90-resources">Resource ids (rid)</a></td>\n</tr>\n<tr>\n<td style="text-align:right">调度器 (Scheduler)</td>\n<td style="text-align:left">Tokio</td>\n</tr>\n<tr>\n<td style="text-align:right">用户空间: libc++ / glib / boost</td>\n<td style="text-align:left">https://deno.land/std/</td>\n</tr>\n<tr>\n<td style="text-align:right">/proc/$$/stat</td>\n<td style="text-align:left"><a href="#%E6%8C%87%E6%A0%87-metrics">Deno.metrics()</a></td>\n</tr>\n<tr>\n<td style="text-align:right">手册页 (man pages)</td>\n<td style="text-align:left">deno types</td>\n</tr>\n</tbody>\n</table>\n<h3 id="%E8%B5%84%E6%BA%90-(resources)">资源 (Resources)<a class="anchor" href="#%E8%B5%84%E6%BA%90-(resources)">§</a></h3>\n<p>资源（Resources)，又称 <code>rid</code>，是 Deno 版本的文件描述符。它们是一些整数数值，用来指代打开的文件、套接字 (sockets) 和其他概念。基于 <code>rid</code>，Deno 能够查询系统中有多少个打开的资源，这在测试时很有用。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">resources</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// { 0: "stdin", 1: "stdout", 2: "stderr" }</span>\n<span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">close</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token method function property-access">resources</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// { 1: "stdout", 2: "stderr" }</span>\n</code></pre>\n<h3 id="%E6%8C%87%E6%A0%87-(metrics)">指标 (Metrics)<a class="anchor" href="#%E6%8C%87%E6%A0%87-(metrics)">§</a></h3>\n<p>指标 (Metrics) 是 Deno 用于各种统计数据的内部计数器。</p>\n<pre class="language-shell"><code class="language-shell"><span class="token operator">></span> console.table<span class="token punctuation">(</span>Deno.metrics<span class="token punctuation">(</span><span class="token punctuation">))</span>\n┌──────────────────┬────────┐\n│     <span class="token punctuation">(</span>index<span class="token punctuation">)</span>      │ Values │\n├──────────────────┼────────┤\n│  opsDispatched   │   <span class="token number">9</span>    │\n│   opsCompleted   │   <span class="token number">9</span>    │\n│ bytesSentControl │  <span class="token number">504</span>   │\n│  bytesSentData   │   <span class="token number">0</span>    │\n│  bytesReceived   │  <span class="token number">856</span>   │\n└──────────────────┴────────┘\n</code></pre>\n<h2 id="%E6%9E%B6%E6%9E%84%E7%A4%BA%E6%84%8F%E5%9B%BE">架构示意图<a class="anchor" href="#%E6%9E%B6%E6%9E%84%E7%A4%BA%E6%84%8F%E5%9B%BE">§</a></h2>\n<p><img src="schematic_v0.2.png" alt="架构示意图"></p>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno-%E5%92%8C-linux-%E7%B1%BB%E6%AF%94">Deno 和 Linux 类比</a><ol><li><a href="#%E8%B5%84%E6%BA%90-(resources)">资源 (Resources)</a></li><li><a href="#%E6%8C%87%E6%A0%87-(metrics)">指标 (Metrics)</a></li></ol></li><li><a href="#%E6%9E%B6%E6%9E%84%E7%A4%BA%E6%84%8F%E5%9B%BE">架构示意图</a></li></ol></nav>'
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
                    "text": "命令行界面",
                    "link": "getting_started/command_line_interface.html"
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
                    "text": "WebAssembly 支持",
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
            "children": [
                {
                    "text": "断言",
                    "link": "testing/assertions.html"
                }
            ],
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
                },
                {
                    "text": "Linter",
                    "link": "tools/linter.html"
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
                    "text": "文件系统事件",
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