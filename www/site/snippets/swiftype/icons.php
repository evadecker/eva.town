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
            <td><svg class="svg-icon"><use xlink:href="<?= $page->file('original-icons.svg')->url().'#overview' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg')->url().'#overview' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg')->url().'#overview' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg')->url().'#overview' ?>"></use></svg></td>
            <th>Overview</th>
          </tr>
          <tr>
            <td>None</td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg')->url().'#preview' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg')->url().'#preview' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg')->url().'#preview' ?>"></use></svg></td>
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
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg')->url().'#analytics' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg')->url().'#analytics' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg')->url().'#analytics' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg')->url().'#analytics' ?>"></use></svg></td>
            <th>Analytics</th>
          </tr>
          <tr>
            <td>None</td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg')->url().'#insights' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg')->url().'#insights' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg')->url().'#insights' ?>"></use></svg></td>
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
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg')->url().'#result-rankings' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg')->url().'#result-rankings' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg')->url().'#result-rankings' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg')->url().'#result-rankings' ?>"></use></svg></td>
            <th>Result Rankings</th>
          </tr>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg')->url().'#weights' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg')->url().'#weights' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg')->url().'#weights' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg')->url().'#weights' ?>"></use></svg></td>
            <th>Weights</th>
          </tr>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg')->url().'#synonyms' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg')->url().'#synonyms' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg')->url().'#synonyms' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg')->url().'#synonyms' ?>"></use></svg></td>
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
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg')->url().'#content' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg')->url().'#content' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg')->url().'#content' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg')->url().'#content' ?>"></use></svg></td>
            <th>Content</th>
          </tr>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg')->url().'#domains' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg')->url().'#domains' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg')->url().'#domains' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg')->url().'#domains' ?>"></use></svg></td>
            <th>Domains</th>
          </tr>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg')->url().'#team' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg')->url().'#team' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg')->url().'#team' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg')->url().'#team' ?>"></use></svg></td>
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
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg')->url().'#install' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg')->url().'#install' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg')->url().'#install' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg')->url().'#install' ?>"></use></svg></td>
            <th>Install Search</th>
          </tr>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg')->url().'#customize' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg')->url().'#customize' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg')->url().'#customize' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg')->url().'#customize' ?>"></use></svg></td>
            <th>Interface Designer</th>
          </tr>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg')->url().'#engage' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg')->url().'#engage' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg')->url().'#engage' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg')->url().'#engage' ?>"></use></svg></td>
            <th>Engagement Modules</th>
          </tr>
          <tr>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('original-icons.svg')->url().'#conversions' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v1-icons.svg')->url().'#conversions' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('v2-icons.svg')->url().'#conversions' ?>"></use></svg></td>
            <td><svg class="svg-icon"><use xlink:href="<?= $page->image('final.svg')->url().'#conversions' ?>"></use></svg></td>
            <th>Conversions</th>
          </tr>
        </tbody>
      </table>
    </div>
    <figcaption>*Existing icons not designed by me.</figcaption>   
  </figure>
</aside>
