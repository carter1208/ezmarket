/**
 * Created by carter on 9/11/2017.
 */
import React, {Component} from 'react';
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    componentWillUnmount() {
    }
    render() {
        return (
                <section className="section-page">
                    <div className="page__top">
                        <div className="container">
                            <h1 className="h1-small">Bounty Campaign Terms</h1>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div id="aside__scroll" className="hidden-xs col-sm-6 col-xs-12">
                                <ul id="top-menu" className="nav nav-tabs page__nav-tabs">
                                    <li className="active"><a className="page__nav" href="#tab2">1. Twitter</a></li>
                                    <li className=""><a className="page__nav" href="#tab3">2. Facebook</a></li>
                                    <li className=""><a className="page__nav" href="#tab4">3. BTT Signature</a></li>
                                    <li className=""><a className="page__nav" href="#tab5">4. BTT translation</a></li>
                                    <li className=""><a className="page__nav" href="#tab6">5. Posts</a></li>
                                    <li className=""><a className="page__nav" href="#tab7">6. Articles</a></li>
                                    <li className=""><a className="page__nav" href="#tab8">Receiving</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-8 col-xs-12 col-sm-offset-4">
                                <div className="tab-content page__tab-content">
                                    <div role="tabpanel" id="tab1">
                                        <h2 className="h2">Bounty Campaign Terms</h2>
                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <p>We believe in a decentralised economy and cryptocurrency community. We are now starting a bounty campaign, so participants can help us tell about Exscudo to the community, and get free coins as a bounty reward. In the Exscudo ICO there will be 240 000 000 EON coins issued in total. As a bounty reward we will distribute 2 400 000 EON coins, which equals to 1% from all EON coins issued in ICO.</p>
                                            <p><b>To earn and receive EON coins, at first you should create an email-based <a href="/wp-redir.php?url=https://my.exscudo.com/web-cabinet/ui/signup" target="_blank">Exscudo account</a></b>. It is important for you to have access to that email and your Exscudo account password, as we will send bounty rewards directly to your Exscudo account.</p>
                                            <p>After you have created an account, just spread information about Exscudo ICO in crypto-community as wide as possible by following the simple instructions in this post.</p>
                                            <p>By completing bounty tasks you will receive bounty-stakes, which are divided in the following categories: twitter, facebook, bitcointalk signature campaign, bitcointalk translation and moderation, writing blog posts and posting articles in popular media. At the end of ICO we will distribute 2 400 000 EON coins proportionally to your bounty stakes in each category.</p>
                                            <p>
                                                {/*<img className="img-responsive" src="img/image.png" alt=""/>*/}
                                            </p>
                                        </div>
                                    </div>
                                    <div role="tabpanel" id="tab2">
                                        <h2 className="h2">1. Twitter Follow &amp; reposts</h2>
                                        <ul>
                                            <li>Follow our official page in <a href="https://twitter.com/ex_scudo" target="_blank">Twitter</a></li>
                                            <li>Log in to <a href="https://my.exscudo.com/web-cabinet/ui/login" target="_blank">Exscudo account</a></li>
                                            <li>Connect Twitter and Exscudo in your account page (‘connect with Twitter’ button).</li>
                                        </ul>

                                        <p>You retweet news marked with <b>#ICOexsc</b> from our official account within 5 days after their publication and not later, and do not delete them until the ICO ends on May 31. Each retweet will earn you the following amount of stakes</p>
                                        <ul>
                                            <li>29 followers and less - 1 stake</li>
                                            <li>From 30 to 99 followers - 10 stakes</li>
                                            <li>From 100 to 249 followers - 25 stakes</li>
                                            <li>From 250 to 999 followers - 60 stakes</li>
                                            <li>From 1000 to 9999 followers - 120 stakes</li>
                                            <li>10000 followers and more - 250 stakes</li>
                                        </ul>
                                        <p>The account must be at least 4 months old. The number of your followers is being fixed at the moment when you connect your account and doesn’t change during the campaign.</p>
                                        <p></p>
                                        <p>NOTE: We count <b>ONLY</b> the posts that are marked with #ICOexsc <b>by our team</b>. So, if you add our hashtag to any posts, it is <b>not</b> counted.</p>
                                        <p></p>
                                    </div>
                                    <div role="tabpanel" id="tab3">
                                        <h2 className="h2">2. Facebook Follow &amp; reposts</h2>
                                        <ul>
                                            <li>Follow our official <a href="https://www.facebook.com/exscudo/" target="_blank">Facebook</a> page</li>
                                            <li>Log in to <a href="https://my.exscudo.com/web-cabinet/ui/login" target="_blank">Exscudo account</a></li>
                                            <li>Connect Facebook and Exscudo in your account page ("connect with Facebook" button)</li>
                                        </ul>
                                        <p>As you have connected your Facebook, we count each of your reposts automatically. Just repost our posts with the <b>#icoexsc</b> hashtag. Shares to public pages and open groups in Facebook are also accepted. All reposts must be public. Total amount of EON coins distributed for this category is <b>360 000 EON</b>.</p>
                                        <p></p>
                                        <p>You repost news marked with <b>#ICOexsc</b> from our official account within 5 days after their publication and not later, and do not delete them until the ICO ends on May 31. Each repost will earn you the following amount of stakes:</p>
                                        <ul>
                                            <li>29 and less - 1 stake</li>
                                            <li>From 30 to 99 friends - 10 stakes</li>
                                            <li>From 100 to 249 friends - 25 stakes</li>
                                            <li>From 250 to 999 friends - 60 stakes</li>
                                            <li>From 1000 to 9999 friends &amp; followers - 120 stakes</li>
                                            <li>10000 friends &amp; followers and more - 250 stakes</li>
                                        </ul>
                                        <p></p>
                                        <p>The account must be at least 4 months old. The number of your followers is being fixed at the moment when you connect your account and doesn’t change during the campaign.</p>
                                        <p></p>
                                        <p>NOTE: We count <b>ONLY</b> the posts that are marked with #ICOexsc <b>by our team</b>. So, if you add our hashtag to any posts, it is <b>not</b> counted.</p>
                                        <p></p>
                                    </div>

                                    <div role="tabpanel" id="tab4">
                                        <h2 className="h2">3. Bitcointalk Signature Campaign</h2>
                                        <p>We are happy to invite you to Exscudo Bitcointalk signature campaign. Just upload the signature and avatar provided by us and write at least 15 constructive posts a week. Total amount of EON coins distributed for this category is <b>720 000 EON</b>.</p>
                                        <p></p>
                                        <p><b>Here you can copy signatures relevant to your rank on bitcointalk:</b></p>
                                        <p><a href="https://docs.google.com/document/d/1Rls0NuziESEM3qEOGUjEed5q6d7l5ntJv3CGcXHKPsE/edit" target="_blank">Signatures from Jr. Member to Hero and Legendary</a></p>
                                        <p><a href="https://drive.google.com/file/d/0B4ZCnJjqmi2GWUpMMEp1S3d4d28/view" target="_blank">Avatar</a></p>
                                        <p></p>
                                        <p></p>
                                        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfsxCW3MLS1e5o7kS5JLhraTy_q5syCiS4OMdMSZqXx8uSBIw/viewform" target="_blank">Apply via this form</a> (please make sure you already have your signature/avatar uploaded)</p>
                                        <p><a href="https://docs.google.com/spreadsheets/d/1nu_8uXvpkNWtTrHGBemr3VTJRxbkQopry_90DENsFJQ/edit?usp=sharing" target="_blank">Count your reward here</a></p>
                                        <p></p>
                                        <p><b>Each week completed will earn you the following stakes:</b></p>
                                        <ul>
                                            <li>Legendary/Hero : 20 Stakes</li>
                                            <li>Sr./Full : 15 stakes</li>
                                            <li>Member: 10 Stakes</li>
                                            <li>Jr. Member: 5 Stakes</li>
                                            <li>Avatar on: +5 Stakes</li>
                                        </ul>
                                        <p></p>
                                        <p><b>Conditions to earn stakes in this category:</b></p>
                                        <ul>
                                            <li>Constructive posts a week minimum</li>
                                            <li>At least 1 post 	a week must be constructive and in the <a href="https://bitcointalk.org/index.php?topic=1781624.0" target="_blank">Exscudo ANN thread</a></li>
                                            <li>As you apply, we define your rank, and it will not be changed</li>
                                            <li>To get signature rewards, you need at least 50 posts written</li>
                                            <li>We will ban and will not send EON coins to spammers and multi accounts</li>
                                            <li>We don’t reward avatars, only as an addition to signatures</li>
                                            <li>Users not posting a min of 15 posts per week for 2 consecutive weeks will be 	removed</li>
                                            <li>Receiving negative trust or ban during your participation in our campaign will result in you being disqualified from our campaign receiving nothing</li>
                                            <li>If we feel there's a lot of spam posts you're making you will be removed from the campaign and receive no payment</li>
                                            <li>Do not change signature during campaign</li>
                                        </ul>
                                        <p></p>
                                        <p><b>Discussion Boards we do not count</b></p>
                                        <p>Games and round, Micro earnings, Politics and Society, Off-topic, Archival, Posts in "tipster" threads, Auctions, Lending, Beginners and help, Press, Investor based games</p>
                                        <p></p>
                                        <p></p>
                                    </div>


                                    <div role="tabpanel" id="tab5">
                                        <h2 className="h2">4. Bitcointalk translation and thread moderation</h2>
                                        <p>Apply through this form to book your language ANN translation and thread moderation.</p>
                                        <p>You will receive 40 stakes for an ANN translation, 20 stakes for our “big post” translation and 5 stakes per page in your thread. Total amount of EON coins distributed in this category is <b>360 000 EON</b>.</p>
                                        <p></p>
                                        <p>Apply via this <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_Kz8VvhgOecgQYtb12k63GPXh-BbogDRVzXxAddon7Q7pnA/viewform" target="_blank">form</a></p>
                                        <p></p>
                                    </div>

                                    <div role="tabpanel" id="tab6">
                                        <h2 className="h2">5. Write a post in your blog/social media about Exscudo</h2>
                                        <p>If you are a big media or a trendsetter, please refer to Option 6. This option is for private users.</p>
                                        <p>Write a post about Exscudo in any language, with at least 1000 characters and containing 2 links to exscudo.com/ico. We will className each article as standard (10 stakes), nice (25 stakes) or extraordinary (90 stakes).</p>
                                        <p></p>
                                        <p>It can be your blog or your social net personal page, for example Facebook or LinkedIn page. The article should be available to the Internet. To className your article, we will check the popularity of your blog and the quality of the content. Total amount of EON coins distributed in this category is <b>240 000 EON</b>.</p>
                                        <p></p>
                                        <p>Send us your article through this form: <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEkP-sL_Aqlm6LvaWHJ9JV7ksvO23D26g5_oY0J4dxkaFjkA/viewform" target="_blank">article form</a></p>
                                        <p>Check your rewards here: blog article <a href="https://docs.google.com/spreadsheets/d/1GwKF6j42kKVDgmeReM6uoJJoNrS7vzqh6WKVMHGqcSA/edit?usp=sharing" target="_blank">spreadsheet</a></p>
                                        <p></p>
                                    </div>

                                    <div role="tabpanel" id="tab7">
                                        <h2 className="h2">6. Help us publish an article in the media (good for journalists)</h2>
                                        <p>If you are a private user, please refer to Option 5. This option is for big media and trendsetters.</p>
                                        <p>You can help us create an article or video blog on a popular media website or outlet. For example, you can write an article about Exscudo in Forbes, Coindesk, Bitcoinist, or in any other media relevant to finances and cryptocurrency.</p>
                                        <p></p>
                                        <p>We will className each article as standard (10 stakes), nice (25 stakes) or extraordinary (90 stakes) depending on the media outlet and it’s reach.</p>
                                        <p></p>
                                        <p>Please make sure, that you are ready to make an article and you are able to publish it in some popular media, then apply through the form below. Total amount of EON coins distributed for this category is <b>360 000 EON</b>.</p>
                                        <p></p>
                                        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSciTv8MUrotFq8VrwSUgVnHYxzUrPIKwpRfRSpMzNX7e94JGQ/viewform" target="_blank">Apply through this form</a></p>
                                        <p></p>
                                    </div>

                                    <div role="tabpanel" id="tab8">
                                        <h2 className="h2">How and when you can receive your bounties</h2>
                                        <p>After the ICO ends, your final amount of stakes will be visible in your Exscudo account.</p>
                                        <p></p>
                                        <p>We will distribute 2 400 000 EON coins in proportion to the amount of stakes each bounty campaign participant has earned in each category. For example, after counting all Twitter retweets, we will make a table where everyone who reposted will see their personal bounty stakes earned in the Twitter category. Since there are 360,000 EON coins dedicated to the Twitter category, those coins will be distributed between all members participating the bounty campaign according to the amount of stakes they have earned. Then we will continue to the Facebook category, then BTT Signature campaign, etc.</p>
                                        <p>To summarize, the stakes earned in each campaign will NOT be pooled together but rather the coins in each category will be divided in each category separately.</p>
                                        <p>The information about stakes already earned is displayed in your Exscudo account. It is updated every 48 hours.</p>
                                        <p>Once all of the stakes are counted, you will see your EON coins in your Exscudo account. The coins will be distributed once the EON blockchain goes live.</p>
                                        <p>Here is an email, <a href="mailto:team@exscudo.com">team@exscudo.com</a>, if you have any questions regarding the bounty campaign or if you need assistance, feel free to contact us and we will be glad to help.</p>
                                        <p></p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}
