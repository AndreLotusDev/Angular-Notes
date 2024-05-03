---
aliases: 
tags: 
date created: Friday, May 3rd 2024, 10:50:59 am
date modified: Friday, May 3rd 2024, 10:59:22 am
---
Algumas formas de se utilizar o style

1 - por estilo inline [style.text-decoration]="'underline'"

2 - ngStyle sintxat obj [ngStyle]={'text-decoration': 'underline'}"

3 - ngStyle por function [ngStyle]="getStyles()"
	getStyles() {
		return {
			'text-decoration': 'underline'
		}
	}