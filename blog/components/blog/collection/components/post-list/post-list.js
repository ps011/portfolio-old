export class PostList {
    async componentWillLoad() {
        this.contentData = await this.getContentData();
    }
    async getContentData() {
        return new Promise((resolve) => {
            if (!this.contentData) {
                fetch(this.contentUrl)
                    .then(async (data) => {
                    this.contentData = await data.json();
                    resolve(this.contentData.documents);
                });
            }
            else {
                resolve(JSON.parse(this.contentData));
            }
        });
    }
    render() {
        return ([h("link", { href: "assets/vendor/bootstrap/css/bootstrap.min.css", rel: "stylesheet" }),
            h("link", { href: "assets/vendor/fontawesome-free/css/all.min.css", rel: "stylesheet", type: "text/css" }),
            h("link", { href: 'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic', rel: 'stylesheet', type: 'text/css' }),
            h("link", { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800', rel: 'stylesheet', type: 'text/css' }),
            h("link", { href: "assets/css/clean-blog.min.css", rel: "stylesheet" }),
            h("div", { class: "container" },
                h("div", { class: "row" },
                    h("div", { class: "col-lg-8 col-md-10 mx-auto" },
                        this.contentData && this.contentData.map(content => {
                            return [h("div", { class: "post-preview" },
                                    h("a", { href: `post-detail.html?id=${content.fields.postId.stringValue}` },
                                        h("h2", { class: "post-title" }, content.fields.postTitle.stringValue),
                                        h("h3", { class: "post-subtitle" }, content.fields.postSubtitle.stringValue)),
                                    h("p", { class: "post-meta" },
                                        "Posted by",
                                        h("a", { href: content.fields.userProfile.stringValue }, ` ${content.fields.postedBy.stringValue} `))),
                                h("hr", null)];
                        }),
                        h("div", { class: "clearfix" },
                            h("a", { class: "btn btn-primary float-right", href: "#" }, "Older Posts \u2192")))))]);
    }
    static get is() { return "post-list"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "contentData": {
            "type": "Any",
            "attr": "content-data",
            "mutable": true
        },
        "contentUrl": {
            "type": String,
            "attr": "content-url"
        },
        "history": {
            "type": "Any",
            "attr": "history"
        }
    }; }
    static get style() { return "/**style-placeholder:post-list:**/"; }
}
