export const DEFAULT_STACK = {
    id: 123,
    name: 'Default Stack',
    cards: [
        {
            id: 1,
            isCurrentCard: true,
            isFlippedToFront: true,
            front: 'Tap the card to flip it',
            back: '🥳 Tap Next or Back to see other cards',
        },
        {
            id: 2,
            isCurrentCard: false,
            isFlippedToFront: true,
            front: 'To edit, create and delete your cards...',
            back: 'Tap the button above ☝🏽',
        },
        { id: 3, isCurrentCard: false, isFlippedToFront: true, front: '猫', back: '🐈' },
        {
            id: 4,
            isCurrentCard: false,
            isFlippedToFront: true,
            front: "What do you call cheese that isn't yours?",
            back: 'Nacho Cheese',
        },
    ],
}
