import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'


const features = [
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



export default function Feature() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">人类数字遗产储藏与缅怀</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">数百GB的数字遗产？没问题</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        那朵可以处理大规模的数字遗产，并借助AIGC技术，从中提取逝者的“人格”，随着技术的不断发展，我们希望能够与过去建立诸多奇妙的联系。
                    </p>
                </div>
            </div>
            <div className="relative overflow-hidden pt-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <img
                        src="http://files-static.naduo.love/public/offical-website/web"
                        alt="App screenshot"
                        className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                        width={2432}
                        height={1442}
                    />
                    <div className="relative" aria-hidden="true">
                        <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                {feature.name}
                            </dt>{' '}
                            <dd className="inline">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
