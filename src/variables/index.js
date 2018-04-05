export const palette = {
    white: '#FFFFFF',
    black: '#333333',
    offWhite: '#ecf0f1',
    gray: '#95a5a6',
    midnightBlue: '#2c3e50',
    wetAsphalt: '#34495e',
    pomegranateRed: '#c0392b',
    alizarinRed: '#e74c3c',
    concrete: '#95a5a6',
    linkBlue: '#2287CD',
    green: '#7bba3d'
}

export const text = {
    textAreaPlaceholder: 'Paste in your data here. It must be either array or object',
    objectCollapsed: '{...}',
    arrayCollapsed: '[...]'
}

export const family = {
    book: '"CircularStd-Book", Helvetica, arial, sans-serif',
    bold: '"CircularStd-Bold", Helvetica, arial, sans-serif',
    medium: '"CircularStd-Medium", Helvetica, arial, sans-serif',
};

export const defaultJson = {
    "0": [
            {
                "id": 10,
                "title": "House",
                "level": 0,
                "children": [],
                "parent_id": null
            }
        ],
        
        "1": [
                {
                    "id": 12,
                    "title": "Red Roof",
                    "level": 1,
                    "children": [],
                    "parent_id": 10
                },
                {
                    "id": 18,
                    "title": "Blue Roof",
                    "level": 1,
                    "children": [],
                    "parent_id": 10
                },
                {
                    "id": 13,
                    "title": "Wall",
                    "level": 1,
                    "children": [],
                    "parent_id": 10
                }
            ],

        "2": [
                {
                    "id": 17,
                    "title": "Blue Window",
                    "level": 2,
                    "children": [],
                    "parent_id": 12
                },
                {
                    "id": 16,
                    "title": "Door",
                    "level": 2,
                    "children": [],
                    "parent_id": 13
                },
                {
                    "id": 15,
                    "title": "Red Window",
                    "level": 2,
                    "children": [],
                    "parent_id": 12
                }
            ]
        }