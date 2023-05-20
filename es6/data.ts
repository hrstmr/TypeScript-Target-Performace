const _job = {
    summary: {
        total_actions: 4,
        finished_actions: 4,
    },
    updated_at: '2020-07-15T10:24:42.364000000Z',
    job_id: '4b1733e7-c8e0-4fdd-a7f1-13d3ab725c92',
    description: 'Job from our export',
    created_at: '2020-07-15T10:24:40.975000000Z',
    status: 'finished',
    tags: {
        export_id: ['8848c5d8-fd44-43c0-b7f2-1428d0f4891a'],
    },
};

export const d1: Partial<typeof _job> = _job;

export let d2 = [] as number[];
for (let i = 0; i < 10000; i++) {
    d2.push(i);
}
export const d3 = {
    id: '4b1733e7-c8e0-4fdd-a7f1-13d3ab725c92',
    updated_at: '2020-07-15T10:24:42.364000000Z',
    job_id: '4b1733e7-c8e0-4fdd-a7f1-13d3ab725c92',
    description: 'Job from our export',
    created_at: '2020-07-15T10:24:40.975000000Z',
    status: 'finished',
};

export const d4 = [1, 2, 3, 4, 5];

export const d5 = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localizationTags: [],
            lastEdit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung',
        },
    ],
    url: '/en-US/docs/Tools/Scratchpad',
} as const;
