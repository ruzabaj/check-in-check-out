  <template>
  <main>
      <div class="col-md-8 col-md-offset-2">
        <div id="people">
            <v-client-table :columns="headingss" :data="tableData" >
                <!-- <template slot="edit" slot-scope="props"> -->
                   <!-- <div>
                        <a class="fa fa-edit" :href="edit(props.row.id)">thing</a>
                    </div> -->
                <!-- </template> -->
            </v-client-table>
        </div>
    </div>
  </main>
    
</template>

<script>
     import { mapGetters } from 'vuex'

    export default {
        name:'holidayCalendar',
        // methods: {
        //   edit: function(id){
		// 				return "#"
        //   }
        // },
        data() {
            return {
                headingss: ['SN', 'Nepali Date','English Date','Day','Remarks'],
    
                tableData: [
                //     {SN:1, name:"John", Day:"Monday"},
               
                ]
            };
        },
        created(){
            this.$store.dispatch('calendar')
            
            this.tableData=[
                {SN:this.holiday.id},
            {Nepali:this.holiday.nepali_date},
            {English:this.holiday.english_date},
            {Day:this.holiday.day},
            {Remarks:this.holiday.remarks},

            ]
            
        },
        computed: {
            ...mapGetters({holiday:'staffholiday'})
        }
    }
</script>


<style scoped>
main{
    background-color:  #F8F9FA;
    /* margin-top: 70px; */
    padding: 4rem 0px;
    height: auto;
}

</style>
<style>
    main{
    background-color:  #F8F9FA;
    }
    #people {
        width: 140%;
        height: 100px;
        text-align: center;
        margin-top: 10%;
        margin-left: 05% !important;
    }
    .VueTables__limit-field select{
        outline: none !important;
    }
    option:hover{
        background-color:rgb(30, 30, 133) !important; 
    }
    .VueTables__search-field, 
    .VueTables__limit-field{
        display: flex;
        justify-content: center;        
    }
    .form-group{
        margin: 10px;
    }
    .form-group label{
        padding: 10px !important;
    }
    .form-control{
        width: 200px !important;
        background: rgba(223, 223, 224, 0.15) !important;
    }
    .form-control label{
        margin: 05px !important;
    }
    #VueTables__limit_HQpa9{
        outline: none;
    }
    .text-center p{
        text-align: center !important;
    }
    .VueTables__table tr{
        border-left: 3px solid transparent !important;
    }
    .VueTables__table tr:hover{
        border-left: 5px !important;
        border-left-color: rgb(30, 30, 133) !important;
        background-color: whitesmoke;
    }
    /* .table-bordered > :not(caption) > * > *{
        border-width: 4px 05px !important;
        background: white !important;
    } */
</style>