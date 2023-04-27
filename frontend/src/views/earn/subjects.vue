<template>
    <section>
    <navbar />
    <h3 style="margin-top: 80px;">รายวิชาที่ต้องการลงทะเบียน</h3>
        <div class="container-fluid bg-white rounded mb-4" style="width: 80%; padding: 30px;">
            <div class="input-group mb-4">
                <input type="text" id="subjectInput" class="form-control" placeholder="ค้นหารายวิชา">
                <div class="input-group-append">
                    <button class="btn py-2" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i
                            class="bi bi-filter"></i></button>
                    <div class="dropdown-menu">
                        <button class="dropdown-item" id ="human">กลุ่มวิชามนุษย์ศาสตร์</button>
                        <button class="dropdown-item" id ="social">กลุ่มวิชาสังคมศาสตร์ </button>
                        <button class="dropdown-item" id ="lang">กลุ่มวิชาภาษา</button>
                        <button class="dropdown-item" id ="sci-math">กลุ่มวิชาวิทยาศาสตร์กับคณิตศาสตร์ </button>
                    </div>
                </div>
            </div>
            <table class="table table-border text-center ">
                <thead>
                    <tr>
                        <th scope="col">รหัสวิชา</th>
                        <th scope="col">ชื่อวิชา</th>
                        <th scope="col">หมวดวิชา</th>
                        <th scope="col">หน่วยกิต</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>06012345</td>
                        <td>Subjectttttttttttttttttttttttttt</td>
                        <td>วิชาเฉพาะ</td>
                        <td>3</td>
                        <td><button class="btn btn-outline-success" type="button" id="addSubject">
                                เพิ่มรายวิชา
                            </button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>




<script>
import navbar from './navbar.vue'
 

export default {
  components: { navbar },
    
    data() {
      return {}
    }
  }
</script>

<style scoped>
body{
    background-color: whitesmoke !important;
     
}

nav{
    font-family: 'Sarabun', sans-serif;
}


#studentName{
    color: #C74A1A;
    border-color: #C74A1A;
}

#studentName:hover{
    color: white;
    background-color: #C74A1A;
}

#mySubject{
    color: #C74A1A;
    border-color: #C74A1A;
}

#mySubject:hover{
    color: white;
    background-color: #C74A1A;
}

#subject{
    color: #C74A1A;
    border-color: #C74A1A;
}

#subject:hover{
    color: white;
    background-color: #C74A1A;
}

h3{
    font-family: 'Sarabun', sans-serif;
    text-align: center;
    padding: 40px;
}
.table{
    font-family: 'Sarabun', sans-serif;
}

thead{
    background-color: #FFA547;
}

.dropdown-menu{
    font-family: 'Sarabun', sans-serif;
 
}

::placeholder{
    font-family: 'Sarabun', sans-serif;
}




</style>