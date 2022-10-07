import { NotFoundException } from './common/notFound.exception';
import { AppException } from './common/app.exception';
import { PostService } from './services/post.service';
import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-posts',
    templateUrl: './post.component.html'
})
export class PostComponent implements OnInit{
    posts: any;
    constructor(private service: PostService) {
        
    }
    ngOnInit(){
        this.service.getPost()
        .subscribe(response => {
            console.log(response);
            this.posts = response;
            console.log(typeof this.posts)
        })
    }
    createPost(input: HTMLInputElement) {
        let post : any = {title: input.value}
        input.value = '';
        this.posts.splice(0, 0, post);

        this.service.createPost(post)
            .subscribe((response : any) => {
                post.id = response.id;
                console.log(response)
                // first is the index we want to add
                // second param is the number of elements we are deleting
                // third is the object we are adding
                
            }, error => {
                this.posts.splice(0, 1);

                if (error instanceof NotFoundException) {
                    // this.form.setErrors(error.json());
                }
                else {
                    // handled by the global error handler we wrote
                    throw error;
                }
            }
            )
    }
    updatePost(post:any) {
        // this.http.patch(this.url, JSON.stringify({isRead : true}))
        //     .subscribe((response) => {
        //         post = response;
        //     })
        this.service.updatePost(post)
            .subscribe((response) => {
                if (response.status === 200) {
                    console.log(response)
                }               
            })
        }

        deletePost(post: any) {
            let index = this.posts.indexOf(post)
            this.posts.splice(index, 1)
            this.service.deletePost(post)
                .subscribe((response) => {
                    console.log(response)
                }, (error: AppException) => {
                    this.posts.splice(index, 0, post)

                    if (error instanceof NotFoundException) {
                        alert("this post has already been deleted")
                    } else {
                        // handled by the global error handler
                        throw error;
                    }
                    console.log("shoot" + error)
                })
        }
}