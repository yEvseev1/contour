export interface Event {
	location: string
	time: string
	eventContent: string
	eventType: string
}

export const eventsList: Event[] = [
	{
		location: 'МАИ, Кпп 1',
		time: '12.15',
		eventContent: 'Пожар Пожар Пожар Пожарv Пожар Пожар ПожарПожар',
		eventType: 'Огонь',
	},
	{
		location: 'МАИ, Кпп 2',
		time: '12.15',
		eventContent: 'Драка',
		eventType: 'Драка',
	},
	{
		location: 'МАИ, Кпп 3',
		time: '12.15',
		eventContent: 'Дым',
		eventType: 'Огонь',
	},
	{
		location: 'МАИ, Кпп 5',
		time: '12.15',
		eventContent: 'Алкоголь',
		eventType: 'Нарушение',
	},
	{
		location: 'МАИ, Кпп 6',
		time: '12.15',
		eventContent: 'Сигареты',
		eventType: 'Нарушение',
	},
	{
		location: 'МАИ, Кпп 7',
		time: '12.15',
		eventContent: 'Машина проехала кпп без досмотра',
		eventType: 'Проникновение',
	},
]
