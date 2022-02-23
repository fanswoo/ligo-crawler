export interface ICrawler {
    type: string;
    url: string;
    dist?: {
        type: string;
    };
}
