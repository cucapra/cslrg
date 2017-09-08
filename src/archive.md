---
title: Archive
layout: layout.html
order: 1
---
# Archived Schedules

{{#each schedules}}

## {{ name }}

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

[edit]: https://github.com/cucapra/cslrg/edit/master/src/schedule.yaml
[ics]: calendar.ics
