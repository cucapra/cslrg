---
title: Home
layout: layout.html
order: 0
---
# Machine Learning Hardware Reading Group

For announcements, subscribe to the mailing list by sending a message to <cslrg-l-request@cornell.edu>.
Papers and comments are stored on [the COECIS internal GitHub instance](https://github.coecis.cornell.edu/csl/mlhwrg).

The schedule for this semester (Spring 2017):

{{#each schedules}}

<!-- {{@key}} -->

We meet every other {{ day }} in {{ location }} at {{ ./time }}.

<ul>
{{#each meetings}}
    <li>
      <time>{{date day 'MMMM D'}}</time>: <strong>{{title}}</strong><br>
      led by {{who}}
      {{#if details}}<div>{{{ markdown details }}}</div>{{/if}}
    </li>
{{/each}}
</ul>

{{/each}}

You can [subscribe to a calendar][ics] for this schedule.
And you can [edit the schedule][edit] on GitHub.

[edit]: https://github.com/cucapra/cslrg/edit/master/src/schedule.yaml
[ics]: calendar.ics
