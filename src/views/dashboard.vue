<template>
  <div class="dashboard">
    <header_spruha_Vue />
    <div class="dashboard__page container_center">
      <div class="page__header">
        <div class="page__header-text">
          <h2>Welcome To Dashboard</h2>
          <ul class="page__header-breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active">
              <a href="#">Project Dashboard</a>
            </li>
          </ul>
        </div>
        <div class="page__header-button">
          <button v-for="(itemBtn, indexBtn) in ButtonHeader" :key="indexBtn" class="button__import">
            <i :class="itemBtn.icon" />
            {{ itemBtn.text }}
          </button>
        </div>
      </div>
      <div class="page__main">
        <div class="page__main-left">
          <div class="main__header-card">
            <div class="header__card-box">
              <div class="header__card-body">
                <div class="card__body-content">
                  <h4>Sonia Taylor!</h4>
                  <p>
                    You have two projects to finish, you had completed
                    <b class="text-warning">57%</b>
                    from your montly level, Keep going to your level
                  </p>
                </div>
                <img src="assest/img/work3.png" alt="img">
              </div>
            </div>
          </div>
          <div class="main__three-card">
            <div v-for="(itemCard, indexCard) in Card" :key="indexCard" class="card">
              <div class="card__item">
                <div class="card__item-content">
                  <div class="item__content-header">
                    <label>{{ itemCard.label }}</label>
                    <span>{{ itemCard.span }}</span>
                  </div>
                  <div class="item__content-body">
                    <div class="content__body-start">
                      <h4>{{ itemCard.price }}</h4>
                      <div class="small">
                        <b class="text__success">{{ itemCard.success }}</b>
                        <b class="text__error">{{ itemCard.error }}</b>
                        {{ itemCard.textSuccsess }}
                      </div>
                    </div>
                    <div class="content__body-icon">
                      <i :class="itemCard.icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main__chart-card">
            <div class="chart__content">
              <div class="chart__header">
                <div class="chart__content-text">
                  <label>PROJECT BUDGET</label>
                  <span>The Project Budget is a tool used by project managers to estimate the total cost of a project</span>
                </div>
              </div>
              <div class="chart__body">
                <apexcharts type="line" height="350" :options="chartOptions" :series="series" />
              </div>
            </div>
          </div>
          <div class="main__two-card">
            <div class="card__left">
              <div class="card__left-content">
                <div class="content__header">
                  <div class="content__header-text">
                    <label>Today tasks</label>
                    <div class="note">
                      <div class="project">
                        <span />
                        Project
                      </div>
                      <div class="inprogres">
                        <span />
                        Inprogress
                      </div>
                    </div>
                    <span> UX UI & Backend Developement. </span>
                  </div>
                </div>
                <div class="content__body">
                  <div class="content__body-text">
                    <h6>Project-Budget</h6>
                    <div class="text__start">
                      <h3>$5,240</h3>
                      <p>May 28 - June 01 (2018)</p>
                    </div>
                  </div>
                  <div class="chart__radia">
                    <apexcharts type="radialBar" height="170" :options="chartOptions_radial" :series="series_radial" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card__right">
              <div class="card__right-content">
                <div class="content__header">
                  <div class="content__header-text">
                    <label>Top Inquiries</label>
                    <span>project work involves a group of students investigating .</span>
                  </div>
                </div>
                <div class="content__body">
                  <div v-for="(itemProgress,indexProgress) in Progress" :key="indexProgress" class="content__body-row">
                    <div class="body__row-text">
                      <span>{{ itemProgress.text }}</span>
                    </div>
                    <div class="body__row-progress">
                      <div class="progress">
                        <div class="progress__bar" />
                      </div>
                    </div>
                    <div class="body__row-percent">
                      <div class="percent__content">
                        <span>
                          <i :class="['text-success',itemProgress.iconUp ]" />
                          <i :class="['text-error',itemProgress.iconDown ]" />
                          <b>{{ itemProgress.percent }}</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main__board-card">
            <div class="card__body">
              <div class="card__body-content">
                <div class="card__header">
                  <div class="card__header-text">
                    <label>Tasks</label>
                    <span>A task is accomplished by a set deadline, and must contribute toward work-related objectives.</span>
                  </div>
                  <div class="card__header-button">
                    <a href="#">
                      <i class="fa-solid fa-ellipsis-vertical" />
                    </a>
                  </div>
                </div>
                <div class="card__table">
                  <table>
                    <thead>
                      <tr>
                        <th>Task</th>
                        <th>Team</th>
                        <th>Open task</th>
                        <th>Prority</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(itemTable, indexTable) in Table" :key="indexTable">
                        <td>
                          <label>
                            <input type="checkbox">
                          </label>
                          <span>{{ itemTable.text }}</span>
                        </td>
                        <td>
                          <div class="demo_avatar">
                            <div v-for="(itemImg, indexImg) in itemTable.Img" :key="indexImg" class="img_user">
                              <img :src="itemImg.src" alt="img">
                            </div>
                          </div>
                        </td>
                        <td>{{ itemTable.number }}</td>
                        <td>{{ itemTable.primary }}</td>
                        <td>
                          <span>
                            {{ itemTable.badge }}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page__main-right">
          <div class="main__card-transcations">
            <label class="transcations__content-label">Recent transcations</label>
            <span>Projects where development work is on completion</span>
            <table class="table__transcations">
              <tbody>
                <tr v-for="(itemTranscations, indexTranscations) in Transcations" :key="indexTranscations">
                  <td class="td__img">
                    <div class="td__img-user">
                      <img :src="itemTranscations.src" alt="img">
                    </div>
                  </td>
                  <td class="td__text">
                    <div class="td__text-user">
                      <div class="text__user-content">
                        <h6>{{ itemTranscations.text }}</h6>
                        <p>{{ itemTranscations.textBottom }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="td__end">
                    <div class="td__end-content">
                      <h6>
                        ${{ itemTranscations.percent }}
                        <i :class="['iconUp',itemTranscations.iconUp]" />
                        <i :class="['iconDown',itemTranscations.iconDown]" />
                      </h6>
                      <p>{{ itemTranscations.date }}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="main__card-launch">
            <div class="card__launch">
              <div class="card__launch-content">
                <div class="launch__content-text">
                  <div class="content__text-title">
                    <label>Project Launch</label>
                    <span>the project is going to launch</span>
                  </div>
                  <p class="content__text-day">
                    <b>145 days</b>
                  </p>
                  <a href="#">12 Monday, Oct 2020 </a>
                </div>
                <div class="launch__content-img">
                  <img src="assest/img/work.png" alt="img">
                </div>
              </div>
            </div>
          </div>
          <div class="main__card-goiong">
            <div class="card-goiong">
              <div class="card__goiong-header">
                <label class="header__text-title">On goiong projects</label>
                <span>Projects where development work is on completion</span>
              </div>
              <div class="card__goiong-body">
                <div v-for="(itemListCard, indexListCard) in ListCard" :key="indexListCard" class="goiong__body-listcard">
                  <div class="listcard__header">
                    <div class="listcard__header-avatar">
                      <div v-for="(itemAvatar, indexAvatar) in itemListCard.Avatar" :key="indexAvatar" class="avatar">
                        <img :src="itemAvatar.src" alt="img">
                      </div>
                      <div class="text">
                        Design team
                      </div>
                    </div>
                    <div class="listcard__header-option">
                      <a href="#">
                        <i class="fa-solid fa-ellipsis-vertical" />
                      </a>
                    </div>
                  </div>
                  <div class="listcard__body">
                    <div class="listcard__body-text">
                      <label class="text__day">{{ itemListCard.day }}</label>
                      <h6>{{ itemListCard.text }}</h6>
                    </div>
                    <div class="listcard__body-chart">
                      <apexcharts type="radialBar" height="100" :options="chartOptionsListcard" :series="itemListCard.seriesListcard" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main__card-design">
            <div class="design__header">
              <label class="design__header-text">Website Design</label>
              <div class="design__header-run">
                Running
              </div>
            </div>
            <div class="design__body">
              <div class="design__text">
                <span>Task completed : 7/10</span>
              </div>
              <div class="design__chart">
                <apexcharts
                  type="bar"
                  height="170"
                  width="100%"
                  :options="chartOptionsDesign"
                  :series="seriesDesign"
                />
              </div>
              <div class="design__footer">
                <div class="design__footer-info">
                  <div class="info__name">
                    <h5>Client : </h5>
                    <h5 class="name">
                      John Deo
                    </h5>
                  </div>
                  <div class="info__date">
                    <h5>Deadline : </h5>
                    <h5 class="date">
                      25 Dec 2020
                    </h5>
                  </div>
                </div>
                <div class="design__footer-logo">
                  <img src="assest/img/project-logo.png" alt="img">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header_spruha_Vue from '@/views/components/header_spruha.vue'
import VueApexCharts from 'vue-apexcharts'
export default {
  components: {
    header_spruha_Vue,
    apexcharts: VueApexCharts,
  },
  data (){
    return {
      ButtonHeader: [
        {
          icon: 'fa-solid fa-download',
          text: 'Import'
        },
        {
          icon: 'fa-solid fa-filter',
          text: 'Filter'
        },
        {
          icon: 'fa-solid fa-cloud-arrow-down',
          text: 'Download Report'
        },
      ],
      Card: [
        {
          label: 'TOTAL REVENUE',
          span: 'Previous month vs this months',
          price: '$5,900.00',
          success: '55%',
          textSuccsess: 'Higher',
          icon: 'fa-solid fa-chart-column'
        },
        {
          label: 'New Employees',
          span: 'Employees joined this month',
          price: '15',
          success: '5%',
          textSuccsess: ' Increased',
          icon: 'fa-solid fa-user'
        },
        {
          label: 'Total Expenses',
          span: 'Previous month vs this months',
          price: '$8,500',
          error: '12%',
          textSuccsess: ' Decrease',
          icon: 'fa-solid fa-dollar-sign'
        },
      ],
      Progress: [
        {
          text: 'Brand identity',
          percent: '24.75%',
          iconUp: 'fa-solid fa-arrow-up'
        },
        {
          text: 'UI & UX design',
          percent: '12.34%',
          iconDown: 'fa-solid fa-arrow-down'
        },
        {
          text: 'Product design',
          percent: '12.75%',
          iconUp: 'fa-solid fa-arrow-up'
        }
      ],
      Table: [
        {
          text: 'Evaluating the design',
          Img: [
            {
              src: 'assest/img/1.jpg'
            },
            {
              src: 'assest/img/2.jpg'
            },
            {
              src: 'assest/img/3.jpg'
            },
            {
              src: 'assest/img/4.jpg'
            }
          ],
          number: 37,
          primary: 'High',
          badge: 'Completed'
        },
        {
          text: 'Generate ideas for design',
          Img: [
            {
              src: 'assest/img/5.jpg'
            },
            {
              src: 'assest/img/6.jpg'
            },
            {
              src: 'assest/img/7.jpg'
            },
            {
              src: 'assest/img/8.jpg'
            }
          ],
          number: 37,
          primary: 'Normal',
          badge: 'Pending'
        },
        {
          text: 'Define the problem',
          Img: [
            {
              src: 'assest/img/11.jpg'
            },
            {
              src: 'assest/img/12.jpg'
            },
            {
              src: 'assest/img/9.jpg'
            },
            {
              src: 'assest/img/10.jpg'
            }
          ],
          number: 37,
          primary: 'Low',
          badge: 'Completed'
        },
        {
          text: 'Empathize with users',
          Img: [
            {
              src: 'assest/img/7.jpg'
            },
            {
              src: 'assest/img/9.jpg'
            },
            {
              src: 'assest/img/11.jpg'
            },
            {
              src: 'assest/img/12.jpg'
            }
          ],
          number: 37,
          primary: 'High',
          badge: 'Rejected'
        }
      ],
      Transcations: [
        {
          src: 'assest/img/5.jpg',
          text: 'Flicker',
          textBottom: 'App improvement',
          percent: '45.234',
          iconUp: 'fa-solid fa-turn-up',
          date: '12 Jan 2020'
        },
        {
          src: 'assest/img/6.jpg',
          text: 'Intoxica',
          textBottom: 'Milestone',
          percent: '23.452',
          iconDown: 'fa-solid fa-turn-down',
          date: '23 Jan 2020'
        },
        {
          src: 'assest/img/7.jpg',
          text: 'Digiwatt',
          textBottom: 'Sales executive',
          percent: '78.001',
          iconDown: 'fa-solid fa-turn-down',
          date: '4 Apr 2020'
        },
        {
          src: 'assest/img/8.jpg',
          text: 'Flicker',
          textBottom: 'Milestone2',
          percent: '37.285',
          iconUp: 'fa-solid fa-turn-up',
          date: '4 Apr 2020'
        },
        {
          src: 'assest/img/4.jpg',
          text: 'Flicker',
          textBottom: 'App improvement',
          percent: '25.341',
          iconDown: 'fa-solid fa-turn-down',
          date: '4 Apr 2020'
        },
      ],
      ListCard: [
        {
          Avatar: [
            {
              src: 'assest/img/1.jpg'
            },
            {
              src: 'assest/img/2.jpg'
            },
            {
              src: 'assest/img/3.jpg'
            },
            {
              src: 'assest/img/4.jpg'
            }
          ],
          day: '25 August 2020',
          text: 'Mobile app design',
          seriesListcard: [90],
        },
        {
          Avatar: [
            {
              src: 'assest/img/5.jpg'
            },
            {
              src: 'assest/img/6.jpg'
            },
            {
              src: 'assest/img/7.jpg'
            },
            {
              src: 'assest/img/8.jpg'
            }
          ],
          day: '12 JUNE 2020',
          text: 'Website Redesign',
          seriesListcard: [70],
        },

      ],
      series: [
        {
          name: "TOTAL BUDGET: ",
          data: [100,210, 180,454,454,230,230,656,656,350,350,210,410]
        },
        {
          name: "AMOUNT USRD: ",
          data: [200,530, 110,110,480,520,780,435,475,738,454,454,230]
        },
      ],
      chartOptions: {
        colors: ['#6259ca', '#8f8fb1'],
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [4, 4],
          curve: 'smooth',
          dashArray: [0, 8]
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {

          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Aug', 'Sep', 'Oct'
          ],
        },
        yaxis: {
          categories: ['0','150','300','450','600'],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
          borderColor: '#f4f4fd',
        },
      },
      series_radial: [70],
      chartOptions_radial: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '60%',
            },
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: '70%',
              }
            }
          },
        },
        colors: ['#6259ca'],
        labels: [''],
      },
      chartOptionsListcard: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '30%',
            }
          },
        },
        labels: [''],
        colors: ['#6259ca'],
      },
      seriesDesign: [{
            name: 'Total Project',
            data: [89, 59, 76, 56, 58, 73, 59, 87, 45, 54]
          }, {
            name: 'On Going',
            data: [66, 59, 76, 56, 58, 65, 59, 85, 23, 32]
          },
        ],
      chartOptionsDesign: {
        colors: ['#6259ca', '#eaedf7'],
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10
          },
        },
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2011 GMT', '02/01/2011 GMT', '03/01/2011 GMT', '04/01/2011 GMT',
              '05/01/2011 GMT', '06/01/2011 GMT', '07/01/2011 GMT', '08/01/2011 GMT', '09/01/2011 GMT',
              '10/01/2011 GMT'
            ],
          },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        },
        grid: {
          borderColor: '#fff',
        },
      },
    }
  }
}
</script>
