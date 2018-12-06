<aside>
  <figure class="icon-table" data-color="white">
    <div class="table-sticky">
      <header>
        <h4>Dashboard icons</h4>
        <form class="table-background-toggle">
          <label>
            <input type="radio" name="background" value="white" checked>
            <span class="radio-button"></span>
            <span class="visually-hidden">White</span>
          </label>
          <label>
            <input type="radio" name="background" value="black">
            <span class="radio-button"></span>
            <span class="visually-hidden">Black</span>
          </label>
          <label>
            <input type="radio" name="background" value="blue">
            <span class="radio-button"></span>
            <span class="visually-hidden">Blue</span>
          </label>
        </form>
      </header>
      <table>
        <colgroup>
          <col class="icon-col">
          <col class="icon-col">
          <col class="icon-col">
          <col class="icon-col">
          <col class="label-col">
        </colgroup>  
        <thead>
          <tr>
            <td class="table-rotate"><div>Existing*</div></td>
            <td class="table-rotate"><div>Iteration 1</div></td>
            <td class="table-rotate"><div>Iteration 2</div></td>
            <td class="table-rotate"><div>Final</div></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->file('original-icons.svg').'#overview' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg').'#overview' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg').'#overview' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg').'#overview' ?>"></use></svg></td>
            <th>Overview</th>
          </tr>
          <tr>
            <td>None</td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg').'#preview' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg').'#preview' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg').'#preview' ?>"></use></svg></td>
            <th>Search Preview</th>
          </tr>

          <tr class="table-section-divider">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <th></th>
          </tr>

          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg').'#analytics' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg').'#analytics' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg').'#analytics' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg').'#analytics' ?>"></use></svg></td>
            <th>Analytics</th>
          </tr>
          <tr>
            <td>None</td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg').'#insights' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg').'#insights' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg').'#insights' ?>"></use></svg></td>
            <th>Insights</th>
          </tr>

          <tr class="table-section-divider">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <th></th>
          </tr>

          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg').'#result-rankings' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg').'#result-rankings' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg').'#result-rankings' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg').'#result-rankings' ?>"></use></svg></td>
            <th>Result Rankings</th>
          </tr>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg').'#weights' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg').'#weights' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg').'#weights' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg').'#weights' ?>"></use></svg></td>
            <th>Weights</th>
          </tr>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg').'#synonyms' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg').'#synonyms' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg').'#synonyms' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg').'#synonyms' ?>"></use></svg></td>
            <th>Synonyms</th>
          </tr>

          <tr class="table-section-divider">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <th></th>
          </tr>

          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg').'#content' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg').'#content' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg').'#content' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg').'#content' ?>"></use></svg></td>
            <th>Content</th>
          </tr>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg').'#domains' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg').'#domains' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg').'#domains' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg').'#domains' ?>"></use></svg></td>
            <th>Domains</th>
          </tr>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg').'#team' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg').'#team' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg').'#team' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg').'#team' ?>"></use></svg></td>
            <th>Team</th>
          </tr>

          <tr class="table-section-divider">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <th></th>
          </tr>

          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg').'#install' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg').'#install' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg').'#install' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg').'#install' ?>"></use></svg></td>
            <th>Install Search</th>
          </tr>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg').'#customize' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg').'#customize' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg').'#customize' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg').'#customize' ?>"></use></svg></td>
            <th>Interface Designer</th>
          </tr>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg').'#engage' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg').'#engage' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg').'#engage' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg').'#engage' ?>"></use></svg></td>
            <th>Engagement Modules</th>
          </tr>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg').'#conversions' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg').'#conversions' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg').'#conversions' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg').'#conversions' ?>"></use></svg></td>
            <th>Conversions</th>
          </tr>
        </tbody>
      </table>
    </div>
    <figcaption>*Existing icons not designed by me.</figcaption>   
  </figure>
</aside>
