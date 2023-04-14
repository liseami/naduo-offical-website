
import {
    ChevronRightIcon,
    CheckCircleIcon,
} from '@heroicons/react/20/solid'
import DownloadAlert from './DownloadAlert';
import { useState, ReactDOM } from 'react';


export default function Hero() {
    const [showAlert, setShowAlert] = useState(false);



    return (
        <div className="relative isolate pt-14">
            {showAlert && (
                <DownloadAlert onClose={() => setShowAlert(false)} />
            )}
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                    <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
            </svg>
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                    <div className="flex">
                        <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            <span className="font-semibold text-blue-400">人类数字遗产储存与缅怀</span>
                            <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                            <a href="#" className="flex items-center gap-x-1">
                                <span className="absolute inset-0" aria-hidden="true" />
                                查看那朵的使命
                                <ChevronRightIcon className="-mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        为逝去的亲人创建一朵云，永远缅怀
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        利用现代AIGC生成式AI技术，实现与亲人的再度会面。从规模庞大的数字遗产中提取人格、声音与回忆。让我们找回鲜艳的昨天。珍惜眼前的现在。
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <button
                            type="button"
                            onClick={() => setShowAlert(true)}
                            className="inline-flex items-center gap-x-2 rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <svg t="1681356991065" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3489" width="24" height="24"><path d="M645.289723 165.758826C677.460161 122.793797 701.865322 62.036894 693.033384 0c-52.607627 3.797306-114.089859 38.61306-149.972271 84.010072-32.682435 41.130375-59.562245 102.313942-49.066319 161.705521 57.514259 1.834654 116.863172-33.834427 151.294929-79.956767zM938.663644 753.402663c-23.295835 52.820959-34.517089 76.415459-64.511543 123.177795-41.855704 65.279538-100.905952 146.644295-174.121433 147.198957-64.980873 0.725328-81.748754-43.30636-169.982796-42.751697-88.234042 0.46933-106.623245 43.605024-171.732117 42.965029-73.130149-0.682662-129.065752-74.026142-170.964122-139.348347-117.11917-182.441374-129.44975-396.626524-57.172928-510.545717 51.327636-80.895427 132.393729-128.212425 208.553189-128.212425 77.482118 0 126.207106 43.519692 190.377318 43.519692 62.292892 0 100.137957-43.647691 189.779989-43.647691 67.839519 0 139.732344 37.802399 190.889315 103.03927-167.678812 94.036667-140.543004 339.069598 28.885128 404.605134z" fill="#ffffff" p-id="3490"></path></svg>
                            iOS版下载
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center gap-x-2 rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <svg t="1681357068589" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4619" width="24" height="24"><path d="M247.987001 693.495634c0 60.182684 54.235229 108.978017 109.493763 108.978017l0 108.978017c0 30.066783 25.167193 54.489008 55.258535 54.489008s55.258535-24.422226 55.258535-54.489008l0-107.764376 106.423845 0 0 107.764376c0 30.066783 25.167193 54.489008 55.258535 54.489008 30.088272 0 55.258535-24.422226 55.258535-54.489008L684.938748 802.472628c109.493763 0 109.493763-48.794309 109.493763-108.978017L794.432511 401.526933l-546.44551 0L247.987001 693.495634zM893.181559 421.051615c-30.088272 0-54.746882 24.373107-54.746882 54.489008l0 217.955011c0 30.066783 24.658609 54.489008 54.746882 54.489008s54.746882-24.422226 54.746882-54.489008L947.928441 475.540623C947.928441 445.423699 923.269831 421.051615 893.181559 421.051615zM130.818441 421.051615c-30.091342 0-54.746882 24.373107-54.746882 54.489008l0 217.955011c0 30.066783 24.65554 54.489008 54.746882 54.489008 30.091342 0 54.746882-24.422226 54.746882-54.489008L185.565323 475.540623C185.565323 445.423699 160.909783 421.051615 130.818441 421.051615zM792.641725 333.424882c0-65.288982-34.605146-122.874515-86.371136-155.3563L706.270589 58.060347l-56.352449 0 0 96.650247c-6.640234-1.515516-13.412474-2.673899-20.298302-3.440355-0.373507-7.220449-9.442046-28.196179-29.65746-28.196179L437.597453 123.07406c-20.300348 0-27.402093 21.211091-27.619034 28.314883-5.279237 0.618077-10.487865 1.472538-15.623839 2.533706L394.35458 58.060347 338.002131 58.060347l0 117.779474c-53.780881 32.031531-90.01513 90.775446-90.01513 157.585061l0 11.364839 544.655747 0L792.642748 333.424882zM393.523655 259.799024l-54.6906 0 0-54.6906 54.6906 0L393.523655 259.799024zM704.608739 257.468956l-54.6906 0 0-54.373375 54.6906 0L704.608739 257.468956z" fill="#ffffff" p-id="4620"></path></svg>
                            安卓版下载
                        </button>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            登录网页版 <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                    <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                        <title>App </title>
                        <defs>
                            <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                                <rect width={316} height={684} rx={36} />
                            </clipPath>
                        </defs>
                        <path
                            fill="#ffffff"
                            d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                        />
                        <path
                            fill="#ffffff"
                            d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                        />
                        <foreignObject
                            width={316}
                            height={684}
                            transform="translate(24 24)"
                            clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                        >
                            <img src="http://files-static.naduo.love/public/offical-website/phoneshot" alt="" />
                        </foreignObject>
                    </svg>
                </div>
            </div>
        </div>

    )
}


function TapBtn_Apple() {
    // 检测浏览器环境
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // 如果是手机浏览，则跳转到下载链接
        window.location.href = "https://apps.apple.com/cn/app/%E8%BD%AC%E5%B1%B1-%E8%A1%8C%E4%B8%BA%E4%B9%A0%E6%83%AF%E5%A1%91%E9%80%A0/id6444640823";
    } else {
        // 如果是浏览器游览，则弹出提示框
        <DownloadAlert />
    }
}