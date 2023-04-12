import {
    ArrowPathIcon,
    ChevronRightIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'

const secondaryFeatures = [
    {
        name: '上传、分析数字遗产.',
        description: '现代人规模庞大的数百G的数字遗产，需要专门的存储与分析方案。',
        icon: CloudArrowUpIcon,
    },
    {
        name: '数据安全至上',
        description: '我们在数字遗产的安全储藏方面投入了大量的精力.',
        icon: LockClosedIcon,
    },
    {
        name: '取回数字遗产',
        description: '数字遗产被设计为随时可以取回并终止分析。从而避免一切可能出现的人道主义问题。',
        icon: ServerIcon,
    },
]


export default function Point() {
    return (
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">数字遗产处理</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    通过最先进的AIGC生成式AI技术，与已故的亲人再次会面
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    加入我们一起珍视逝去亲人的回忆，利用现代AIGC生成式AI技术，从庞大的数字遗产中提取亲人的人格、声音与回忆，让我们以一种全新的方式纪念亲人，重温珍贵的回忆。
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {secondaryFeatures.map((feature) => (
                        <div key={feature.name} className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                {feature.name}
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">{feature.description}</p>
                                <p className="mt-6">
                                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                                        查看更多 <span aria-hidden="true">→</span>
                                    </a>
                                </p>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}