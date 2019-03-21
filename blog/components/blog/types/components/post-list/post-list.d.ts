import '../../stencil.core';
import { RouterHistory } from '@stencil/router';
export declare class PostList {
    /**
     * The content data
     */
    contentData: any;
    /**
     * The content url
     */
    contentUrl: string;
    history: RouterHistory;
    componentWillLoad(): Promise<void>;
    getContentData(): Promise<{}>;
    render(): JSX.Element[];
}
