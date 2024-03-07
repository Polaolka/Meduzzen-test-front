export function getRandomColor(): string {
    const colors: string[] = ["#9FBAAE", "#CBDED3", "#9FB7CE", "#BFD6EA", "#E0A39A", "#F2C0BD", "#F0AA8D", "#F4C8BA"];
    const randomIndex: number = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
