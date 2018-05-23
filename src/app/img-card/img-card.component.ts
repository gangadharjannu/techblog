import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
class CatImage {
  message: string;
  api: string;
  fontsize: number;
}

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  private feeds = null;
  constructor(private dataService: DataService) {  }
  ngOnInit() {
    this.getFeeds();
  }

  getFeeds() {
    // this.dataService.getData().subscribe(
    //   data => this.feeds = data,
    //   err => console.error(err),
    //   () => console.log('done loading feeds')
    // );
    this.feeds=[
      {
        "title": "How to set-up a powerful API with Nodejs, GraphQL, MongoDB, Hapi, and Swagger",
        "description": "<div class=\"medium-feed-item\"><p class=\"medium-feed-image\"><a href=\"https://medium.freecodecamp.org/how-to-setup-a-powerful-api-with-nodejs-graphql-mongodb-hapi-and-swagger-e251ac189649?source=rss-------8-----------------javascript\"><img src=\"https://cdn-images-1.medium.com/max/1440/1*tREei6S6bx1VWQ5UOmw8WA.png\" width=\"1440\"></a></p><p class=\"medium-feed-snippet\">Separating your frontend and backend has many advantages</p><p class=\"medium-feed-link\"><a href=\"https://medium.freecodecamp.org/how-to-setup-a-powerful-api-with-nodejs-graphql-mongodb-hapi-and-swagger-e251ac189649?source=rss-------8-----------------javascript\">Continue reading on freeCodeCamp »</a></p></div>",
        "link": "https://medium.freecodecamp.org/how-to-setup-a-powerful-api-with-nodejs-graphql-mongodb-hapi-and-swagger-e251ac189649?source=rss-------8-----------------javascript",
        "guid": {
          "ispermalink": "false",
          "text": "https://medium.com/p/e251ac189649"
        },
        "category": [
          "api",
          "javascript",
          "nodejs",
          "tech",
          "programming"
        ],
        "dc:creator": "Indrek Lasn",
        "pubdate": "Mon, 21 May 2018 17:20:17 GMT",
        "atom:updated": "2018-05-21T17:32:43.079Z",
        "imgHref": "https://cdn-images-1.medium.com/max/1440/1*tREei6S6bx1VWQ5UOmw8WA.png",
        "shortDescription": "Separating your frontend and backend has many advantages"
      },
      {
        "title": "Advanced Visualization with react-vis",
        "description": "<div class=\"medium-feed-item\"><p class=\"medium-feed-image\"><a href=\"https://towardsdatascience.com/advanced-visualization-with-react-vis-efc5c6667b4?source=rss-------8-----------------javascript\"><img src=\"https://cdn-images-1.medium.com/max/600/1*-n2TJ8w7nB-2HRTpPXAn9g.gif\" width=\"600\"></a></p><p class=\"medium-feed-snippet\">Using Voronois, single pass rendering, and canvas components for amazing user experiences</p><p class=\"medium-feed-link\"><a href=\"https://towardsdatascience.com/advanced-visualization-with-react-vis-efc5c6667b4?source=rss-------8-----------------javascript\">Continue reading on Towards Data Science »</a></p></div>",
        "link": "https://towardsdatascience.com/advanced-visualization-with-react-vis-efc5c6667b4?source=rss-------8-----------------javascript",
        "guid": {
          "ispermalink": "false",
          "text": "https://medium.com/p/efc5c6667b4"
        },
        "category": [
          "visualization",
          "react",
          "javascript",
          "frontend",
          "react-vis"
        ],
        "dc:creator": "Andrew McNutt",
        "pubdate": "Mon, 21 May 2018 16:31:35 GMT",
        "atom:updated": "2018-05-21T16:31:35.369Z",
        "imgHref": "https://cdn-images-1.medium.com/max/600/1*-n2TJ8w7nB-2HRTpPXAn9g.gif",
        "shortDescription": "Using Voronois, single pass rendering, and canvas components for amazing user experiences"
      },
      {
        "title": "How To Build Responsive Layouts With Bootstrap 4 and Angular 6 ",
        "description": "<div class=\"medium-feed-item\"><p class=\"medium-feed-image\"><a href=\"https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b?source=rss-------8-----------------javascript\"><img src=\"https://cdn-images-1.medium.com/max/2000/1*b12-5m4nVTGr-xDuvzKmNg.jpeg\" width=\"4592\"></a></p><p class=\"medium-feed-snippet\">Every web app is assumed to be responsive, period.</p><p class=\"medium-feed-link\"><a href=\"https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b?source=rss-------8-----------------javascript\">Continue reading on Medium »</a></p></div>",
        "link": "https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b?source=rss-------8-----------------javascript",
        "guid": {
          "ispermalink": "false",
          "text": "https://medium.com/p/cfbb108d797b"
        },
        "category": [
          "css",
          "angularjs",
          "bootstrap",
          "angular",
          "responsive-design"
        ],
        "dc:creator": "Tomas Trajan",
        "pubdate": "Tue, 15 May 2018 10:17:36 GMT",
        "atom:updated": "2018-05-17T02:36:11.172Z",
        "imgHref": "https://cdn-images-1.medium.com/max/2000/1*b12-5m4nVTGr-xDuvzKmNg.jpeg",
        "shortDescription": "Every web app is assumed to be responsive, period."
      },
      {
        "title": "A forum engine using Nodejs and Vuejs (part 3)",
        "description": "<div class=\"medium-feed-item\"><p class=\"medium-feed-image\"><a href=\"https://medium.com/@meshileya/a-forum-engine-using-nodejs-and-vuejs-part-3-676504f33c23?source=rss-------8-----------------javascript\"><img src=\"https://cdn-images-1.medium.com/max/600/1*-Nd4WoGNdHt6O0Xm-cYlMA.jpeg\" width=\"600\"></a></p><p class=\"medium-feed-snippet\">It almost took a &#x201C;whole decade&#x201D; to wrap up the last section. It seems I need a bit of catching up to do with writing and working.</p><p class=\"medium-feed-link\"><a href=\"https://medium.com/@meshileya/a-forum-engine-using-nodejs-and-vuejs-part-3-676504f33c23?source=rss-------8-----------------javascript\">Continue reading on Medium »</a></p></div>",
        "link": "https://medium.com/@meshileya/a-forum-engine-using-nodejs-and-vuejs-part-3-676504f33c23?source=rss-------8-----------------javascript",
        "guid": {
          "ispermalink": "false",
          "text": "https://medium.com/p/676504f33c23"
        },
        "category": [
          "api",
          "technology",
          "programming",
          "nodejs",
          "javascript"
        ],
        "dc:creator": "MESHILEYA Emmanuel Seun",
        "pubdate": "Sat, 19 May 2018 08:38:21 GMT",
        "atom:updated": "2018-05-19T16:37:36.083Z",
        "imgHref": "https://cdn-images-1.medium.com/max/600/1*-Nd4WoGNdHt6O0Xm-cYlMA.jpeg",
        "shortDescription": "It almost took a “whole decade” to wrap up the last section. It seems I need a bit of catching up to do with writing and working."
      },
      {
        "title": "ReactEurope 2018  ⚛️",
        "description": "<div class=\"medium-feed-item\"><p class=\"medium-feed-image\"><a href=\"https://medium.com/wehkamp-techblog/reacteurope-2018-%EF%B8%8F-252cc888f68?source=rss-------8-----------------javascript\"><img src=\"https://cdn-images-1.medium.com/max/1500/1*qTbMuRz6OttRW4jHo5rz3A.jpeg\" width=\"1500\"></a></p><p class=\"medium-feed-snippet\">For Wehkamp I visited React Europe with my colleague Peter. The conference was held in France just like the previous years, It allowed us&#x2026;</p><p class=\"medium-feed-link\"><a href=\"https://medium.com/wehkamp-techblog/reacteurope-2018-%EF%B8%8F-252cc888f68?source=rss-------8-----------------javascript\">Continue reading on Wehkamp-techblog »</a></p></div>",
        "link": "https://medium.com/wehkamp-techblog/reacteurope-2018-%EF%B8%8F-252cc888f68?source=rss-------8-----------------javascript",
        "guid": {
          "ispermalink": "false",
          "text": "https://medium.com/p/252cc888f68"
        },
        "category": [
          "development",
          "technology",
          "react",
          "coding",
          "programming"
        ],
        "dc:creator": "Dennis Bruijn / @0x1ad2",
        "pubdate": "Sun, 20 May 2018 18:21:38 GMT",
        "atom:updated": "2018-05-20T18:48:47.179Z",
        "imgHref": "https://cdn-images-1.medium.com/max/1500/1*qTbMuRz6OttRW4jHo5rz3A.jpeg",
        "shortDescription": "For Wehkamp I visited React Europe with my colleague Peter. The conference was held in France just like the previous years, It allowed us…"
      },
      {
        "title": "REST API: Java Spring Boot and MongoDB",
        "description": "<div class=\"medium-feed-item\"><p class=\"medium-feed-snippet\">Creating a RESTful web service using the Spring Boot framework and MongoDB</p><p class=\"medium-feed-link\"><a href=\"https://medium.com/@gtommee97/rest-api-java-spring-boot-and-mongodb-4dffbcabbaf5?source=rss-------8-----------------javascript\">Continue reading on Medium »</a></p></div>",
        "link": "https://medium.com/@gtommee97/rest-api-java-spring-boot-and-mongodb-4dffbcabbaf5?source=rss-------8-----------------javascript",
        "guid": {
          "ispermalink": "false",
          "text": "https://medium.com/p/4dffbcabbaf5"
        },
        "category": [
          "api-development",
          "java",
          "spring-boot",
          "web-development",
          "mongodb"
        ],
        "dc:creator": "Thomas Gleason",
        "pubdate": "Sat, 19 May 2018 23:23:52 GMT",
        "atom:updated": "2018-05-20T06:12:33.566Z",
        "shortDescription": "Creating a RESTful web service using the Spring Boot framework and MongoDB"
      },
      {
        "title": "Build A Real World Beautiful Web APP with Angular 6 — A to Z Ultimate Guide (2018) — PART I",
        "description": "<div class=\"medium-feed-item\"><p class=\"medium-feed-image\"><a href=\"https://medium.com/@hamedbaatour/build-a-real-world-beautiful-web-app-with-angular-6-a-to-z-ultimate-guide-2018-part-i-e121dd1d55e?source=rss-------8-----------------javascript\"><img src=\"https://cdn-images-1.medium.com/max/2000/1*y3c9ggOkOzdAr8JC7TUrEQ@2x.png\" width=\"3840\"></a></p><p class=\"medium-feed-snippet\">No more ugly tutorials projects ! No more fictional brands examples!</p><p class=\"medium-feed-link\"><a href=\"https://medium.com/@hamedbaatour/build-a-real-world-beautiful-web-app-with-angular-6-a-to-z-ultimate-guide-2018-part-i-e121dd1d55e?source=rss-------8-----------------javascript\">Continue reading on Medium »</a></p></div>",
        "link": "https://medium.com/@hamedbaatour/build-a-real-world-beautiful-web-app-with-angular-6-a-to-z-ultimate-guide-2018-part-i-e121dd1d55e?source=rss-------8-----------------javascript",
        "guid": {
          "ispermalink": "false",
          "text": "https://medium.com/p/e121dd1d55e"
        },
        "category": [
          "html",
          "javascript",
          "angular-6",
          "angular",
          "css"
        ],
        "dc:creator": "Hamed Baatour",
        "pubdate": "Sat, 19 May 2018 11:34:56 GMT",
        "atom:updated": "2018-05-22T10:59:48.688Z",
        "imgHref": "https://cdn-images-1.medium.com/max/2000/1*y3c9ggOkOzdAr8JC7TUrEQ@2x.png",
        "shortDescription": "No more ugly tutorials projects ! No more fictional brands examples!"
      },
      {
        "title": "Uninitialized Behavior in Java (and Thoughts for Other Programming Languages)",
        "description": "<div class=\"medium-feed-item\"><p class=\"medium-feed-snippet\">Quiz time: what happens when you declare a variable in Java, but don&#x2019;t initialize it, and then go on to use the variable? Whether you&#x2026;</p><p class=\"medium-feed-link\"><a href=\"https://medium.com/@joeb3219/uninitialized-behavior-in-java-and-thoughts-for-other-programming-languages-ec35bab21533?source=rss-------8-----------------javascript\">Continue reading on Medium »</a></p></div>",
        "link": "https://medium.com/@joeb3219/uninitialized-behavior-in-java-and-thoughts-for-other-programming-languages-ec35bab21533?source=rss-------8-----------------javascript",
        "guid": {
          "ispermalink": "false",
          "text": "https://medium.com/p/ec35bab21533"
        },
        "category": [
          "compilers",
          "java",
          "programming"
        ],
        "dc:creator": "Joseph A. Boyle",
        "pubdate": "Sun, 20 May 2018 14:01:00 GMT",
        "atom:updated": "2018-05-20T14:01:00.913Z",
        "shortDescription": "Quiz time: what happens when you declare a variable in Java, but don’t initialize it, and then go on to use the variable? Whether you…"
      },
      {
        "title": "Top 10 JavaScript errors from 1000+ projects (and how to avoid them)",
        "description": "<div class=\"medium-feed-item\"><p class=\"medium-feed-image\"><a href=\"https://codeburst.io/top-10-javascript-errors-from-1000-projects-and-how-to-avoid-them-2956ce008437?source=rss-------8-----------------javascript\"><img src=\"https://cdn-images-1.medium.com/max/1216/1*CgdaYzZ9xhMZXPtoZlnuOQ.png\" width=\"1216\"></a></p><p class=\"medium-feed-snippet\">By Jason Skowronski @ Rollbar</p><p class=\"medium-feed-link\"><a href=\"https://codeburst.io/top-10-javascript-errors-from-1000-projects-and-how-to-avoid-them-2956ce008437?source=rss-------8-----------------javascript\">Continue reading on codeburst »</a></p></div>",
        "link": "https://codeburst.io/top-10-javascript-errors-from-1000-projects-and-how-to-avoid-them-2956ce008437?source=rss-------8-----------------javascript",
        "guid": {
          "ispermalink": "false",
          "text": "https://medium.com/p/2956ce008437"
        },
        "category": [
          "programming",
          "javascript",
          "technology",
          "web-development",
          "coding"
        ],
        "dc:creator": "Brandon Morelli",
        "pubdate": "Wed, 16 May 2018 12:57:42 GMT",
        "atom:updated": "2018-05-16T12:57:42.003Z",
        "imgHref": "https://cdn-images-1.medium.com/max/1216/1*CgdaYzZ9xhMZXPtoZlnuOQ.png",
        "shortDescription": "By Jason Skowronski @ Rollbar"
      },
      {
        "title": "✨ Free Frontend Masters Courses ⚛️ for a Week ",
        "description": "<div class=\"medium-feed-item\"><p class=\"medium-feed-image\"><a href=\"https://blog.kentcdodds.com/free-frontend-masters-courses-%EF%B8%8F-for-a-week-f5eff638df5c?source=rss-------8-----------------javascript\"><img src=\"https://cdn-images-1.medium.com/max/2000/1*iehP0UAWCqSzQ0CxhQcNrA.jpeg\" width=\"4928\"></a></p><p class=\"medium-feed-snippet\">My Advanced Component Patterns and Testing React Applications are free on Frontend Masters for a limited time!</p><p class=\"medium-feed-link\"><a href=\"https://blog.kentcdodds.com/free-frontend-masters-courses-%EF%B8%8F-for-a-week-f5eff638df5c?source=rss-------8-----------------javascript\">Continue reading on kentcdodds »</a></p></div>",
        "link": "https://blog.kentcdodds.com/free-frontend-masters-courses-%EF%B8%8F-for-a-week-f5eff638df5c?source=rss-------8-----------------javascript",
        "guid": {
          "ispermalink": "false",
          "text": "https://medium.com/p/f5eff638df5c"
        },
        "category": [
          "javascript",
          "react"
        ],
        "dc:creator": "Kent C. Dodds",
        "pubdate": "Fri, 18 May 2018 13:32:26 GMT",
        "atom:updated": "2018-05-18T13:35:27.382Z",
        "imgHref": "https://cdn-images-1.medium.com/max/2000/1*iehP0UAWCqSzQ0CxhQcNrA.jpeg",
        "shortDescription": "My Advanced Component Patterns and Testing React Applications are free on Frontend Masters for a limited time!"
      }
    ];
  }
  goto(url){
    window.open(url,'_blank');
  }
}
