import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass'],
})
export class CommentComponent implements OnInit {
  @Input() countryId!: string;
  comments: any[] = [];

  commentForm = this.formBuilder.group({
    comment: ['', Validators.required],
  });

  constructor(
    private commentService: CommentService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    this.commentService
      .getComments(this.countryId)
      .subscribe((country) => (this.comments = country.comments));
  }

  onSubmit(): void {
    this.commentService
      .postComment(this.countryId, this.commentForm.controls.comment.value)
      .subscribe((comment) => {
        this.commentForm.reset();
        this.comments.push(comment);
      });
  }

  deleteComment(commentId: string): void {
    this.commentService.deleteComment(commentId).subscribe(() => {
      this.comments = this.comments.filter(
        (comment) => commentId !== comment.id
      );
    });
  }
}
