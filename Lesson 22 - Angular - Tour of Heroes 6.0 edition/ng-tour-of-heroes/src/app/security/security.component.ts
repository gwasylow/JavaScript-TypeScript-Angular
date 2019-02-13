import { Component, OnInit, AfterViewInit, AfterViewChecked, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeScript, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  public htmlSnippet = '<b><i>Some html text</i></b>';
  public javaScriptSnippet = '<script type=\'text/javascript\'>alert(\'XSS attacked!!\');</script>';
  public executableJavaScriptSnippet: SafeHtml;

  public dangerousUrl = '';
  public executableUnsafeUrl: SafeUrl = '';

  constructor(private sanitizer: DomSanitizer) {
    this.dangerousUrl = 'javascript:alert("dangerous url")';
    this.executableUnsafeUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    this.executableJavaScriptSnippet = sanitizer.bypassSecurityTrustHtml(this.javaScriptSnippet);
   }

  ngOnInit() {
  }
}
