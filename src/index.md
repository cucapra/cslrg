---
title: Home
layout: layout.html
order: 0
---
# Machine Learning Hardware Reading Group

The schedule for this semester:

<ul>
{{#each schedule}}
    <li>
      <time>{{date day 'MMMM D'}}</time>: <strong>{{title}}</strong><br>
      led by {{who}}
      {{#if details}}<div>{{{ markdown details }}}</div>{{/if}}
    </li>
{{/each}}
</ul>
