import {
    EditIcon,
    FacebookIcon,
    ResearchIcon,
    TextIcon,
    VectorIcon,
    TwitterIcon,
    ArrowIcon,
    WebsiteIcon,
    GoogleIcon,
    WritingIcon,
    YoutubeIcon,
    LinkedlnIcon,
    GmailIcon,
    ExplandIcon,
    AmazonIcon,
} from '../components/icons/icons';

export const categoryList = [
    {
        id: 1,
        label: 'All',
        data: [
            {
                id: 1,
                title: 'Blog Idea',
                desc: 'Blog ideas generate more website traffic.',
                icon: <EditIcon />,
                color: '#FEF9EA',
            },
            {
                id: 2,
                title: 'Blog Intro',
                desc: 'Start write compelling introduction',
                icon: <EditIcon />,
                color: '#FEF9EA',
            },
            {
                id: 3,
                title: 'Article Generator',
                desc: 'Generate more copies with article AI',
                icon: <EditIcon />,
                color: '#FEF9EA',
            },
            {
                id: 4,
                title: 'Facebook Ads',
                desc: 'Facebooks ad copies that make your ads.',
                icon: <FacebookIcon />,
                color: '#F4F8FF',
            },
            {
                id: 5,
                title: 'Tweet Ideas',
                desc: 'Engage with your amazing followers',
                icon: <TwitterIcon />,
                color: '#F4F8FF',
            },
            {
                id: 6,
                title: 'Content Rephrase',
                desc: 'Rephrase your content in different voice.',
                icon: <ArrowIcon />,
                color: '#F4F8FF',
            },
            {
                id: 7,
                title: 'Landing Page Headline',
                desc: 'A unique and memorable perfect headline',
                icon: <WebsiteIcon />,
                color: '#FEF9EA',
            },
            {
                id: 8,
                title: 'SEO Meta Description',
                desc: 'Your website for maximum visibility',
                icon: <GoogleIcon />,
                color: '#F4F8FF',
            },
            {
                id: 9,
                title: 'Product Description',
                desc: 'Write compelling detailed product',
                icon: <WritingIcon />,
                color: '#FEF9EA',
            },
        ],
    },
    {
        id: 2,
        label: 'Article and Blog',
        title: 'Article and Blog',
        desc: 'Write your dream SEO article short time.',
        icon: <TextIcon />,
        color: 'cardBlue',
        data: [
            {
                id: 1,
                title: 'Blog Idea',
                desc: 'Blog ideas generate more website traffic.',
                icon: <EditIcon />,
                color: '#FEF9EA',
                type: 'all',
            },
            {
                id: 2,
                title: 'Blog Intro',
                desc: 'Start write compelling introduction',
                icon: <EditIcon />,
                color: '#FEF9EA',
                type: 'all',
            },
            {
                id: 3,
                title: 'Article Generator',
                desc: 'Generate more copies with article AI',
                icon: <EditIcon />,
                color: '#FEF9EA',
                type: 'all',
            },
        ],
    },
    {
        id: 3,
        label: 'Social Media',
        title: 'Social Media',
        desc: 'Write compelling detailed product',
        icon: <VectorIcon />,
        color: 'cardGreen',
        data: [
            {
                id: 4,
                title: 'Facebook Ads',
                desc: 'Facebooks ad copies that make your ads.',
                icon: <FacebookIcon />,
                color: '#F4F8FF',
                type: 'all',
            },
            {
                id: 5,
                title: 'Tweet Ideas',
                desc: 'Engage with your amazing followers',
                icon: <TwitterIcon />,
                color: '#F4F8FF',
            },
            {
                id: 11,
                title: 'LinkedIn Posts',
                desc: 'Engage your LinkedIn Targeted Audience',
                icon: <LinkedlnIcon />,
                color: '#F4F8FF',
            },
            {
                id: 10,
                title: 'Youtube Descriptions',
                desc: 'YouTube description that help your videos',
                icon: <YoutubeIcon />,
                color: '#F4F8FF',
            },
        ],
    },
    {
        id: 4,
        label: 'Writing',
        data: [
            {
                id: 9,
                title: 'Product Description',
                desc: 'Write compelling detailed product',
                icon: <WritingIcon />,
                color: '#FEF9EA',
            },
            {
                id: 12,
                title: 'Cold Emails',
                desc: 'Personalized email outreach to your target',
                icon: <GmailIcon />,
                color: '#F4F8FF',
            },
            {
                id: 6,
                title: 'Content Rephrase',
                desc: 'Rephrase your content in different voice.',
                icon: <ArrowIcon />,
                color: '#F4F8FF',
            },
            {
                id: 13,
                title: 'Sentence Expandar',
                desc: 'Expand short sentence into more descrive',
                icon: <ExplandIcon />,
                color: '#F4F8FF',
            },
        ],
    },
    {
        id: 5,
        label: 'Keyword Research',
        title: 'Keyword Research',
        desc: 'Pick your excet keyword for rank anything',
        icon: <ResearchIcon />,
        color: 'cardViolet',
        data: [
            {
                id: 17,
                title: 'Keyword Research',
                desc: 'Pick your excet keyword for rank anything',
                icon: <ResearchIcon />,
                color: '#F4F8FF',
            },
        ],
    },
    {
        id: 6,
        label: 'Ecommerce',
        data: [
            {
                id: 14,
                title: 'Amazon Product Descriptions',
                desc: 'Descriptions that will rank in first page',
                icon: <AmazonIcon />,
                color: '#F4F8FF',
            },
            {
                id: 15,
                title: 'Amazon Product Features',
                desc: 'Descriptions that will rank in first page',
                icon: <AmazonIcon />,
                color: '#F4F8FF',
            },
            {
                id: 16,
                title: 'Amazon Product Titels',
                desc: 'Powerful titels that rank on google',
                icon: <AmazonIcon />,
                color: '#F4F8FF',
            },
        ],
    },
    {
        id: 7,
        label: 'Website',
        data: [
            {
                id: 7,
                title: 'Landing Page Headline',
                desc: 'A unique and memorable perfect headline',
                icon: <WebsiteIcon />,
                color: '#FEF9EA',
            },
            {
                id: 18,
                title: 'Landing Page',
                desc: 'Tailor high-converting landing page copies',
                icon: <WebsiteIcon />,
                color: '#FEF9EA',
            },
            {
                id: 8,
                title: 'SEO Meta Description',
                desc: 'Your website for maximum visibility',
                icon: <GoogleIcon />,
                color: '#F4F8FF',
            },
        ],
    },
];
