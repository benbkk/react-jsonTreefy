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
    linkBlue: '#2287CD'
}

export const text = {
    textAreaPlaceholder: 'Paste in your data here. It must be either array or object',
}

export const family = {
    book: '"CircularStd-Book", Helvetica, arial, sans-serif',
    bold: '"CircularStd-Bold", Helvetica, arial, sans-serif',
    medium: '"CircularStd-Medium", Helvetica, arial, sans-serif',
};

export const defaultJson = {
    error: new Error('error'),
    func: () => console.log('test'),
    text: 'text',
    int: 100,
    boolean: true,
    null: null,
    undefined: undefined,
    object: {
        text: 'text',
        int: 100,
        boolean: true,
    },
    array: [
        1,
        2,
        3,
        {
            string: 'test',
        }
    ]
}