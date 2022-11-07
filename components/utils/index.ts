// Get colours for type badges
export function getColorType(type: any) {
    if (type === 'grass') {
        return 'bg-green-400';
    }
    if (type === 'normal') {
        return 'bg-brown-400';
    }
    if (type === 'fire') {
        return 'bg-red-400';
    }
    if (type === 'water') {
        return 'bg-blue-400';
    }
    if (type === 'electric') {
        return 'bg-yellow-400';
    }
    if (type === 'ice') {
        return 'bg-blue-200';
    }
    if (type === 'fighting') {
        return 'bg-red-900';
    }
    if (type === 'ground') {
        return 'bg-beige-400';
    }
    if (type === 'flying') {
        return 'bg-purple-200';
    }
    if (type === 'psychic') {
        return 'bg-pink-400';
    }
    if (type === 'bug') {
        return 'bg-green-300';
    }
    if (type === 'rock') {
        return 'bg-beige-400';
    }
    if (type === 'ghost') {
        return 'bg-purple-600';
    }
    if (type === 'dark') {
        return 'bg-brown-700';
    }
    if (type === 'dragon') {
        return 'bg-purple-700';
    }
    if (type === 'steel') {
        return 'bg-grey-400';
    }
    if (type === 'fairy') {
        return 'bg-pink-200';
    }
    if (type === 'poison') {
        return 'bg-purple-300';
    }
}
