// Get colours for type badges
export function getColorType(type: any) {
    if (type === 'grass') {
        return { color: 'bg-[#38BE4B]', icon: '/type-icons/Pokémon_Grass_Type_Icon.svg' };
    }
    if (type === 'normal') {
        return { color: 'bg-[#929BA4]', icon: '/type-icons/Pokémon_Normal_Type_Icon.svg' };
    }
    if (type === 'fire') {
        return { color: 'bg-[#FF983E]', icon: '/type-icons/Pokémon_Fire_Type_Icon.svg' };
    }
    if (type === 'water') {
        return { color: 'bg-[#3293DD]', icon: '/type-icons/Pokémon_Water_Type_Icon.svg' };
    }
    if (type === 'electric') {
        return { color: 'bg-#[FBD200]', icon: '/type-icons/Pokémon_Electric_Type_Icon.svg' };
    }
    if (type === 'ice') {
        return { color: 'bg-[#4AD2C1]', icon: '/type-icons/Pokémon_Ice_Type_Icon.svg' };
    }
    if (type === 'fighting') {
        return { color: 'bg-[#E12C6A]', icon: '/type-icons/Pokémon_Fighting_Type_Icon.svg' };
    }
    if (type === 'ground') {
        return { color: 'bg-[#E97233]', icon: '/type-icons/Pokémon_Ground_Type_Icon.svg' };
    }
    if (type === 'flying') {
        return { color: 'bg-[#8AACE3]', icon: '/type-icons/Pokémon_Flying_Type_Icon.svg' };
    }
    if (type === 'psychic') {
        return { color: 'bg-[#FF6676]', icon: '/type-icons/Pokémon_Psychic_Type_Icon.svg' };
    }
    if (type === 'bug') {
        return { color: 'bg-[#83C500]', icon: '/type-icons/Pokémon_Bug_Type_Icon.svg' };
    }
    if (type === 'rock') {
        return { color: 'bg[#C9B787]', icon: '/type-icons/Pokémon_Rock_Type_Icon.svg' };
    }
    if (type === 'ghost') {
        return { color: 'bg-[#4A6AB3]', icon: '/type-icons/Pokémon_Ghost_Type_Icon.svg' };
    }
    if (type === 'dark') {
        return { color: 'bg-[#5A5366]', icon: '/type-icons/Pokémon_Dark_Type_Icon.svg' };
    }
    if (type === 'dragon') {
        return { color: 'bg-[#0070CA]', icon: '/type-icons/Pokémon_Dragon_Type_Icon.svg' };
    }
    if (type === 'steel') {
        return { color: 'bg-[#5A8FA3]', icon: '/type-icons/Pokémon_Steel_Type_Icon.svg' };
    }
    if (type === 'fairy') {
        return { color: 'bg-[#FB8AEC]', icon: '/type-icons/Pokémon_Fairy_Type_Icon.svg' };
    }
    if (type === 'poison') {
        return { color: 'bg-[#B467CD]', icon: '/type-icons/Pokémon_Poison_Type_Icon.svg' };
    }
}
