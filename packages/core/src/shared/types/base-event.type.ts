export type BaseEventType<T = Element> = {
    click?: (event: React.MouseEvent<T>) => void
    hover?: (event: React.MouseEvent<T>) => void;
    mouseMove?: (event: React.MouseEvent<T>) => void;
    mouseEnter?: (event: React.MouseEvent<T>) => void;
}