import '../../stencil.core';
import { MatchResults, RouterHistory } from "@stencil/router";
export declare class PostDetails {
    /**
     * The content data
     */
    contentData: any;
    /**
     * The content url
     */
    contentUrl: string;
    history: RouterHistory;
    match: MatchResults;
    componentWillLoad(): void;
    render(): JSX.Element[];
}
