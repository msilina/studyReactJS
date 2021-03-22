export const editedPanels = (panels, pokemon) => {
    const p = panels.map(panel => panel.id === pokemon.id
        ? {
            id: pokemon.id,
            caption: pokemon.caption,
            text: pokemon.text
        }
        : panel);
    return p;
}
