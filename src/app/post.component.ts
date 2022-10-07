import { PostService } from './services/post.service';
import { Observable } from 'rxjs';
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
        }, error => {
            alert('An unexpected error occured')
            console.log(error);
        });
    }
    createPost(input: HTMLInputElement) {
        let post : any = {title: input.value}
        input.value = '';
        this.service.createPost(post)
            .subscribe((response : any) => {
                post.id = response.id;
                console.log(response)
                // first is the index we want to add
                // second param is the number of elements we are deleting
                // third is the object we are adding
                this.posts.splice(0, 0, post);
            }, error => {
                if (error.status === 400) {
                    // this.form.setErrors(error.json());
                }
                else {
                    alert("wola")
                    console.log("shoot" + error)
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
            }, error => {
                alert("wola")
                console.log("shoot" + error)
            })
        }

        deletePost(post: any) {
            this.service.deletePost(post)
                .subscribe((response) => {
                    let index = this.posts.indexOf(post)
                    this.posts.splice(index, 1)
                    console.log(response)
                }, (error: Response) => {
                    if (error.status === 404) {
                        alert("this post has already been deleted")
                    } else {
                        alert("hola, deleting failed")
                    }
                    console.log("shoot" + error)
                })
        }
}