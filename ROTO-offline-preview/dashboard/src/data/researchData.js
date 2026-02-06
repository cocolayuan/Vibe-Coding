export const summaryInsights = {
  findings: [
    {
      id: 1,
      title: '学习曲线集中在首次使用',
      description: '用过一次所有节点后即可掌握，说明产品逻辑本身可学习性强',
      category: '可用性',
      severity: 'positive',
    },
    {
      id: 2,
      title: '「剧情背景」和「提示词」填写是最大痛点',
      description: '不确定 AI 理解能力如何，需要参考案例才能上手，包括 @引用方式也不清楚',
      category: '痛点',
      severity: 'critical',
    },
    {
      id: 3,
      title: '等待时间长（~80秒）是体验关键挑战',
      description: '需要从脚本层面就开始设计等待片段',
      category: '体验',
      severity: 'high',
    },
    {
      id: 4,
      title: '交互深度与制作成本强关联',
      description: '观众参与度越高，分支越多，制作难度和成本相应增长',
      category: '制作',
      severity: 'medium',
    },
  ],
  painPoints: [
    { label: '生成节点放置位置困惑', detail: '首次使用时不清楚生成节点是否必须紧跟交互节点之后', category: '认知' },
    { label: '分支判断也需等候视频', detail: '之前未预料到分支判断节点也需要准备超时等候视频', category: '认知' },
    { label: '分支节点需上传内容', detail: '首次使用时不清楚分支节点需要上传内容', category: '认知' },
    { label: '模型差异导致画面不一致', detail: '自有工作流使用的模型与 ROTO 使用的 Veo 模型不同', category: '技术' },
    { label: '撤回功能缺失', detail: '误触删掉已填满内容的节点，退出后内容丢失（已上线）', category: '功能' },
    { label: '内置语言模型润色需求', detail: '希望在写剧情背景和提示词时可直接调用语言模型', category: '需求' },
  ],
  creatorExperience: [
    {
      title: '提示词复用策略',
      description: '直接拿内容组工作流里生视频的提示词，加固定限定（如亚洲人、胶片感、都市文艺片等），Veo 生成控制画面风格一致性会好一些',
    },
    {
      title: '超时等候视频设计',
      description: '一般用空镜或氛围感画面，保证观感不重复、不突兀。「叠加AI」超时等候约80秒，分支判断超时等候约10秒',
    },
    {
      title: '生成模型选择策略',
      description: '文生视频用于用户回答五花八门的场景；首帧固定用于有清晰场景设定的场景',
    },
  ],
}

export const painPointChartData = [
  { name: '提示词填写', score: 95, fill: '#ff453a' },
  { name: '等待时间', score: 85, fill: '#ff9f0a' },
  { name: '节点理解', score: 70, fill: '#ffd60a' },
  { name: '画面一致性', score: 60, fill: '#30d158' },
  { name: '撤回/保存', score: 55, fill: '#64d2ff' },
  { name: '制作成本', score: 50, fill: '#bf5af2' },
]

export const userJourneyData = [
  { stage: '首次打开', satisfaction: 60, confusion: 75 },
  { stage: '节点理解', satisfaction: 45, confusion: 85 },
  { stage: '提示词填写', satisfaction: 35, confusion: 90 },
  { stage: '生成等待', satisfaction: 40, confusion: 50 },
  { stage: '预览测试', satisfaction: 70, confusion: 30 },
  { stage: '完成作品', satisfaction: 85, confusion: 15 },
]

export const featureRequestData = [
  { name: 'LM文字润色', votes: 5, percentage: 100 },
  { name: '撤回功能', votes: 4, percentage: 80 },
  { name: '实时保存', votes: 4, percentage: 80 },
  { name: '参考案例库', votes: 3, percentage: 60 },
  { name: '自动分镜', votes: 2, percentage: 40 },
]

export const rawInterviewData = [
  {
    id: 1,
    question: '简单介绍一下你的创作背景，之前主要做过哪些类型的内容？',
    category: '背景',
    respondent: 'Sabrina',
    answer: '自己独立创作了「最后的观众」，参与了「100个女孩的心情」和「奥特曼」的ROTO上传制作。平台上除了猫上司和大象第一集外，其他作品基本都是她上传的。是ROTO最资深的创作者用户。',
  },
  {
    id: 2,
    question: '在使用 Roto 之前，你对「AI 互动视频」或「开放世界叙事」这类概念有过了解吗？',
    category: '认知',
    respondent: 'Sabrina',
    answer: '了解过。看过谷歌的开放大世界宣传片（实时输入去哪、干什么，类似游戏的开放式体验），也体验过 Pixverse 的互动视频产品，但觉得画面有点鬼畜，质量不太高。',
  },
  {
    id: 3,
    question: '最初接触 ROTO 时，你对它的期待是什么？',
    category: '期待',
    respondent: 'Sabrina',
    answer: '最初感觉像一个交互影片工具，类似黑镜第5季的 Bandersnatch。但实际使用后觉得比 Bandersnatch 可能性更多，交互方式更丰富，自由度更高。',
  },
  {
    id: 4,
    question: '第一次打开创作工具时，你的第一印象是什么？',
    category: '首次体验',
    respondent: 'Sabrina',
    answer: '新版画布感觉比之前复杂，像是要做 3D 立体空间的样子。从使用角度来说，觉得第一个版本（从左到右、横平竖直）更方便。新版给人空间感，对我的创作来讲没有特别的加分吧。',
  },
  {
    id: 5,
    question: '打开画布，从「初始剧情节点」开始创建作品时，有没有哪个概念或功能让你感到困惑？',
    category: '痛点',
    respondent: 'Sabrina',
    answer: '上传奥特曼时，最初不清楚可以用分支判断节点来实现不同结局走向（成功/失败结局对应不同首尾帧）。第一次使用时不知道分支节点需要上传视频内容。但用过一次后，所有节点的使用方式就都明白了。',
  },
  {
    id: 6,
    question: '在设置「交互节点」时，你是如何判断在哪个位置触发用户交互最为合适的？',
    category: '使用策略',
    respondent: 'Sabrina',
    answer: '交互节点的位置比较容易判断，因为在剧本/脚本中已经设定好了问题的位置。但生成节点的放置位置当时不太清楚——不确定是必须在交互节点之后立即设置，还是在生成视频出来之前设置一个就行。最终发现取决于剧情设置，有些需要先走过场再加生成节点。',
  },
  {
    id: 7,
    question: '「生成节点」的概念对你来说是否清晰？配置生成类型的必填项时，哪部分最让你头疼？',
    category: '痛点',
    respondent: 'Sabrina',
    answer: '「剧情背景」和「生成内容定义」的填写方式最头疼：不清楚剧情背景应该概括写还是原文粘贴，最终选择概括+简单写结构走向；不清楚用 @ 引用交互节点的方式；不确定 AI 理解程度如何；参考了 Carol 的截图和文本案例后才逐步理解。现在的经验是直接拿内容组工作流里生视频的提示词加固定限定。',
  },
  {
    id: 8,
    question: '需上传「超时生成等候剧情」作为衔接，你在创作时是怎么考虑的？',
    category: '使用策略',
    respondent: 'Sabrina',
    answer: '从脚本层面就需要提前设定。当前「叠加AI」超时生成等候时间约80秒，制作时会预设等待片段，一般用空镜或氛围感画面，保证观感不重复、不突兀，剧情不做明显推进。「分支判断」的超时等候与AI生成的超时等候是不同的概念——分支判断等候约10秒即可。',
  },
  {
    id: 9,
    question: '「分支判断」系统如何判断走哪个分支的判断规则，你是怎么设置的？',
    category: '使用策略',
    respondent: 'Sabrina',
    answer: '以「最后的观众」为例：剧情中需要用户从三个按钮中选择，选择不同颜色走不同剧情分支，给出对应的反馈视频。这个功能很快就能想到用分支判断来实现。但发现分支判断也需要等待时间，之前没有考虑到需要为「分支判断」也准备循环等候视频。',
  },
  {
    id: 10,
    question: '你觉得 ROTO 目前的「AI 智能辅助」能力如何？有哪些环节希望 AI 能提供更多帮助？',
    category: '功能需求',
    respondent: 'Sabrina',
    answer: '希望在写剧情背景和提示词的文字阶段能内置LM模型辅助润色，这样比去其他AI平台生了再copy过来会更方便。在创作层面，希望能上传脚本后自动生成分镜，但担心制作界面和上传界面集成在同一画布会太复杂。文字润色的AI辅助是最现实可加的功能。',
  },
  {
    id: 11,
    question: '你的预览测试过程是怎样的？',
    category: '工作流程',
    respondent: 'Sabrina',
    answer: '上传完成后自己跑一遍观看，一般看一遍就能发现比较大的问题，细节问题可能需要多看几遍。根据roto生成画面的效果来调整视频的制作配置。',
  },
  {
    id: 12,
    question: '有没有遇到AI生成的内容质量不理想的情况？你是如何处理的？',
    category: '质量',
    respondent: 'Sabrina',
    answer: '主要通过润色提示词来改善生成效果。首尾帧和文生视频的设定一般在开始就想好，后期改动不大。如果画面有问题，会调整生成节点的固定提示词。需要时也会用首帧固定来保证画面一致性。',
  },
  {
    id: 13,
    question: '相比传统视频创作，这种「构建开放世界观」的方式对你来说有什么不同？',
    category: '创作体验',
    respondent: 'Sabrina',
    answer: '需要额外思考交互形式带来的挑战：脚本层面要预留等待片段；交互节点的问题设置需要考虑如何便于呈现；不希望交互感觉像预设了答案；需要考虑生成画面如何与后续剧情衔接；整体需要更多地从用户体验角度思考。',
  },
  {
    id: 14,
    question: '你有在观看端体验过自己的作品吗？整体感觉如何？',
    category: '观看体验',
    respondent: 'Sabrina',
    answer: '所有作品都在观看端测试过。作为创作者对自己的视频和交互点非常清楚，知道期望观众输入什么，但不太清楚首次观看者会怎么输入，以及输出效果如何。',
  },
  {
    id: 15,
    question: '预制视频和AI生成视频的过渡，观看时体验是否自然？',
    category: '观看体验',
    respondent: 'Sabrina',
    answer: '在内容的制作上是顺畅的，观看的体验不一定。有时候看模型返回的结果或者网络等都会影响。',
  },
  {
    id: 16,
    question: '你觉得当前的交互方式能满足你想要的"观众共创"效果吗？',
    category: '交互设计',
    respondent: 'Sabrina',
    answer: '目前文字/语音两种方式基本可以，但觉得生成视频的交互节点算少，更多的体感像是在看一条片子。如果要观众高度参与（多处交互、多分支），创作制作难度会非常大，每个分支上新增交互点意味着更多分支，制作任务和成本也就相对会加大。',
  },
  {
    id: 17,
    question: '你觉得 Roto 最吸引创作者的点是什么？',
    category: '价值主张',
    respondent: 'Sabrina',
    answer: '不同故事线 + 带有交互性的剧情是最创新的点。传统视频创作只有一条线，没有别的吸引点可加。ROTO 让创作者脑洞更大，故事创作可能性更高，与用户通过语音/画面互动让创作更好玩。',
  },
  {
    id: 18,
    question: '如果可以改进一个功能，你最希望改进什么？',
    category: '功能需求',
    respondent: 'Sabrina',
    answer: '撤回功能（已上线）。第一次使用时没有撤回功能，经常误触删掉已填满内容的节点，非常崩溃。此外，实时保存功能之前不太灵敏，不小心退出后内容就丢失了。',
  },
  {
    id: 19,
    question: '对于「每个人走自己的故事线」这个方向，能谈谈你的个人看法吗？',
    category: '行业观点',
    respondent: 'Sabrina',
    answer: '体验过 Pixverse 的互动视频产品，但觉得画面有点鬼畜，质量不太高。',
  },
]

export const categories = [...new Set(rawInterviewData.map(d => d.category))]

export const kpiData = [
  { label: '受访创作者', value: 5, suffix: '位', icon: 'users' },
  { label: '访谈问题', value: 19, suffix: '个', icon: 'messageCircle' },
  { label: '核心发现', value: 4, suffix: '项', icon: 'lightbulb' },
  { label: '痛点问题', value: 6, suffix: '个', icon: 'alertTriangle' },
]

export const radarData = [
  { subject: '可学习性', score: 85 },
  { subject: '提示词体验', score: 30 },
  { subject: '等待体验', score: 35 },
  { subject: '画面质量', score: 60 },
  { subject: '交互设计', score: 65 },
  { subject: '工具稳定性', score: 50 },
]
