## 最初项目想法

## 项目框架技术要求

1，帮我在当前目录下创建一个符合monorepo项目工程管理的项目结构:
2，项目分前后端，都在apps目录下面，前端(frontend),后端(backend),整个项目采用AI开发的方式，遵循codex，claude code的范式spec，sdd等
3，前端可能包含：app或小程序，web，ai项目，后端作为api接口，用FastApi实现
4，尽可能的使用目前流行的工程管理技术和架，至少要包含：pnpm workspace, monorepo, turborepo, packages, utils, docs,rollup, husky，vue3，TypeScript，其他有好用的没有提到的也可以使用尽可能齐全，要符合monorepo项目工程管理。
5.项目结构必须要有的文件夹：apps,frontend,backend,packages,components,utils,docs,build
6，最后一定要加一个readme.md项目阅读说明，还有考虑不周，不全的一并要补上
7，使用Rollup打包：支持多种模块格式的库打包

## 补充-1

1，在frontend下创建三个文件夹h5-weixin,web，ai-web,再将frontend下原来的文件全部转移到web下
2，对比本地下载的开源项目，同步技术栈版本
3，如何把开源项目代码搬运到当前项目中
4，当前代码提交到GitHub

## todo-list：未完成工作

1，参考本地代码，结构，页面，功能点，模块等
2，AI规范式编程方式，spec，SDD，原型页面设计，产品需求PRO文档
3，AI-Agent软件开发，桌面端（tauri2），pc，web，app多端打通业务场景
4，区分行业，技术语言的软件开发，项目结构
5，AI开发范式过程，总结，记录，复用，修改，可持续可循环工作方式

## 未知领域

1，python大型复制的项目结构，微服务，分布式
2，AI开发范式，项目按照模块化，功能化，页面的方式如何开发，恢复，版本控制，浏览历史
3，AI 应用开发：编排能力（链式调用-langChanin，图调用-langGraph）

● PostgreSQL + pgvector: AI 时代的“黄金搭档”。

○ 痛点:构建 RAG(检索增强生成)应用,传统方案是“业务数据存 MySQL/Postgres,向量数据存 Pinecone/ChromaDB”,需要维护两套异构数据库,架构复杂、数据一致性难保证、成本高昂。

○ 解决方案: pgvector 是 PostgreSQL 的一个扩展,让“地球上最先进的开源关系型数据库”原生支持向量存 储和检索。

■ 架构简化:一套数据库,同时搞定业务数据(用户、订单)和 AI 数据(Embeddings),运维复杂度骤降。 I

■ 数据一致性:可以在同一个事务中同时操作业务数据和向量数据,保证绝对一致。

■ 成本效益:减少了需要运维的服务数量,极大降低了中小企业落地 Al 的成本。

# 前端架构低代码到类 Figma AI D2C 智能研发链路升级,架构师带你前端进阶 Agent 全栈 40K+

D2C -> design to code

T2C -> text to design to code 大厂招聘、AI 化研发落地最稀缺

AI 团队提效

AI Agent 开发 ：提示词工程-上下文工程-harness（驾驭工程）-loop engineering(循环工程)
Loop Engineering：让AI自我迭代
Loop 的核心是五步法:Discover → Execute → Verify → Record → Decidely 发现问题、执行修复、验证结果、记录经验、决定下一步。

python AI 与 Typescript AI 对齐

## 操作错我记录
