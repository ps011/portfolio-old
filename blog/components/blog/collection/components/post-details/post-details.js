export class PostDetails {
    componentWillLoad() {
        console.log('====================', window.location.href.split('?')[1].split('=')[1]);
    }
    render() {
        h("stencil-router", null,
            h("stencil-route", { url: "/post-detail/:postId", component: "post-details" }),
            h("stencil-route", { url: "/", component: "post-list" }));
        return ([h("link", { href: "assets/vendor/bootstrap/css/bootstrap.min.css", rel: "stylesheet" }),
            h("link", { href: "assets/vendor/fontawesome-free/css/all.min.css", rel: "stylesheet", type: "text/css" }),
            h("link", { href: 'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic', rel: 'stylesheet', type: 'text/css' }),
            h("link", { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800', rel: 'stylesheet', type: 'text/css' }),
            h("link", { href: "assets/css/clean-blog.min.css", rel: "stylesheet" }),
            h("article", null,
                h("div", { class: "container" },
                    h("div", { class: "row" },
                        h("div", { class: "col-lg-8 col-md-10 mx-auto" },
                            h("p", null, "Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center \u2014 an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory."),
                            h("p", null, "Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science."),
                            h("p", null, "What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth."),
                            h("p", null, "A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her."),
                            h("p", null, "For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us."),
                            h("h2", { class: "section-heading" }, "The Final Frontier"),
                            h("p", null, "There can be no thought of finishing for \u2018aiming for the stars.\u2019 Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning."),
                            h("p", null, "There can be no thought of finishing for \u2018aiming for the stars.\u2019 Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning."),
                            h("blockquote", { class: "blockquote" }, "The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten."),
                            h("p", null, "Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development."),
                            h("h2", { class: "section-heading" }, "Reaching for the Stars"),
                            h("p", null, "As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man."),
                            h("span", { class: "caption text-muted" }, "To go places and do things that have never been done before \u2013 that\u2019s what living is all about."),
                            h("p", null, "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before."),
                            h("p", null, "As I stand out here in the wonders of the unknown at Hadley, I sort of realize there\u2019s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.")))))
        ]);
    }
    static get is() { return "post-details"; }
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
        },
        "match": {
            "type": "Any",
            "attr": "match"
        }
    }; }
    static get style() { return "/**style-placeholder:post-details:**/"; }
}
