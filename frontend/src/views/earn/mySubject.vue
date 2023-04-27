<template>
    <section>
    <nav class="navbar navbar-light bg-white fixed-top ">
        <div class="container-fluid ">
            <a class="navbar-brand">
                <img src="https://cdn.discordapp.com/attachments/1017787574250647614/1094654856830128280/Kmitl.png"
                    alt="" width="120" height="60">
            </a>
            <div class="d-flex">
                <a href="subject.html" class="btn" type="button" id="subject">รายชื่อวิชา</a>
                <a href="mySubject.html" class="btn ms-2" type="button" id="mySubject">วิชาเรียนของฉัน</a>
                <div class="dropdown ms-2">
                    <button class="btn dropdown-toggle" type="button" id="studentName" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Name Surname
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class=" bth dropdown-item" href="#" style="color: #C74A1A;">Log out</a></li>

                    </ul>
                </div>
            </div>


        </div>
    </nav>
     
    <h3 style="margin-top: 80px;">รายวิชาที่ลงทะเบียนแล้ว</h3>
    <div class="container bg-white rounded" style="width: 80%; padding: 30px;">
        <div class="d-flex mb-3" style="font-family: 'Sarabun', sans-serif;">
            <div class="me-auto p-2">
                <h5>วิชาเฉพาะ</h5>
            </div>
            <div class="p-2">
                <h5>หน่วยกิตที่เหลือ: 25</h5>
            </div>
            <div class="p-2">
                <h5>หน่วยกิตทั้งหมด: 26</h5>
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
                    <td><button class="btn btn-outline-danger" type="button" id="removeSubject">
                            ยกเลิกรายวิชา
                        </button></td>
                </tr>
                <tr>

                    <td>06012345</td>
                    <td>Subjectttttttttttttttttttttttttt</td>
                    <td>วิชาเฉพาะ</td>
                    <td>3</td>
                    <td><button class="btn btn-outline-danger" type="button" id="removeSubject">
                            ยกเลิกรายวิชา
                        </button></td>
                </tr>
            </tbody>

        </table>

    </div>

    <div class="container bg-white mt-4 rounded" style="width: 80%; padding: 30px;">
        <div class="d-flex mb-3" style="font-family: 'Sarabun', sans-serif;">
            <div class="me-auto p-2">
                <h5>วิชาศึกษาทั่วไป</h5>
            </div>
            <div class="p-2">
                <h5>หน่วยกิตปัจจุบัน: 25</h5>
            </div>
            <div class="p-2">
                <h5>หน่วยกิตทั้งหมด: 26</h5>
            </div>
        </div>

        
        <div class="d-flex mb-3" style="font-family: 'Sarabun', sans-serif;">
            <div class="me-auto p-2">
                <h6>กลุ่มวิชามนุษย์ศาสตร์ (6 หน่วยกิต)</h6>
            </div>
            <div class="p-2">
                <h6>หน่วยกิตที่เหลือ: 25</h6>
            </div>
            <div class="p-2">
                <h6>หน่วยกิตทั้งหมด: 26</h6>
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
                    <td><button class="btn btn-outline-danger" type="button" id="removeSubject">
                            ยกเลิกรายวิชา
                        </button></td>
                </tr>
                <tr>

                    <td>06012345</td>
                    <td>Subjectttttttttttttttttttttttttt</td>
                    <td>วิชาเฉพาะ</td>
                    <td>3</td>
                    <td><button class="btn btn-outline-danger" type="button" id="removeSubject">
                            ยกเลิกรายวิชา
                        </button></td>
                </tr>
            </tbody>

        </table>
        
        
        <div class="d-flex mb-3" style="font-family: 'Sarabun', sans-serif;">
            <div class="me-auto mt-3">
                <h6>กลุ่มวิชาสังคมศาสตร์ (6หน่วยกิต)</h6>
            </div>
            <div class="p-2">
                <h6>หน่วยกิตที่เหลือ: 25</h6>
            </div>
            <div class="p-2">
                <h6>หน่วยกิตทั้งหมด: 26</h6>
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
                    <td><button class="btn btn-outline-danger" type="button" id="removeSubject">
                            ยกเลิกรายวิชา
                        </button></td>
                </tr>
                <tr>

                    <td>06012345</td>
                    <td>Subjectttttttttttttttttttttttttt</td>
                    <td>วิชาเฉพาะ</td>
                    <td>3</td>
                    <td><button class="btn btn-outline-danger" type="button" id="removeSubject">
                            ยกเลิกรายวิชา
                        </button></td>
                </tr>
            </tbody>

        </table>
        
        
        <div class="d-flex mb-3" style="font-family: 'Sarabun', sans-serif;">
            <div class="me-auto p-2">
                <h6>กลุ่มวิชาภาษา (12 หน่วยกิต)</h6>
            </div>
            <div class="p-2">
                <h6>หน่วยกิตที่เหลือ: 25</h6>
            </div>
            <div class="p-2">
                <h6>หน่วยกิตทั้งหมด: 26</h6>
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
                    <td><button class="btn btn-outline-danger" type="button" id="removeSubject">
                            ยกเลิกรายวิชา
                        </button></td>
                </tr>
                <tr>

                    <td>06012345</td>
                    <td>Subjectttttttttttttttttttttttttt</td>
                    <td>วิชาเฉพาะ</td>
                    <td>3</td>
                    <td><button class="btn btn-outline-danger" type="button" id="removeSubject">
                            ยกเลิกรายวิชา
                        </button></td>
                </tr>
            </tbody>

        </table>

        <div class="d-flex mb-3" style="font-family: 'Sarabun', sans-serif;">
            <div class="me-auto p-2">
                <h6>กลุ่มวิชาวิทยาศาสตร์กับคณิตศาสตร์ (6 หน่วยกิต)</h6>
            </div>
            <div class="p-2">
                <h6>หน่วยกิตที่เหลือ: 25</h6>
            </div>
            <div class="p-2">
                <h6>หน่วยกิตทั้งหมด: 26</h6>
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
                    <td><button class="btn btn-outline-danger" type="button" id="removeSubject">
                            ยกเลิกรายวิชา
                        </button></td>
                </tr>
                <tr>

                    <td>06012345</td>
                    <td>Subjectttttttttttttttttttttttttt</td>
                    <td>วิชาเฉพาะ</td>
                    <td>3</td>
                    <td><button class="btn btn-outline-danger" type="button" id="removeSubject">
                            ยกเลิกรายวิชา
                        </button></td>
                </tr>
            </tbody>

        </table>

    </div>

    <div class="container bg-white my-4 rounded" style="width: 80%; padding: 30px;">
        <div class="d-flex mb-3" style="font-family: 'Sarabun', sans-serif;">
            <div class="me-auto p-2">
                <h5>วิชาเลือกเสรี</h5>
            </div>
            <div class="p-2">
                <h5>หน่วยกิตที่เหลือ: 25</h5>
            </div>
            <div class="p-2">
                <h5>หน่วยกิตทั้งหมด: 26</h5>
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
                    <td><button class="btn btn-outline-danger" type="button" id="removeSubject">
                            ยกเลิกรายวิชา
                        </button></td>
                </tr>
                <tr>

                    <td>06012345</td>
                    <td>Subjectttttttttttttttttttttttttt</td>
                    <td>วิชาเฉพาะ</td>
                    <td>3</td>
                    <td><button class="btn btn-outline-danger" type="button" id="removeSubject">
                            ยกเลิกรายวิชา
                        </button></td>
                </tr>
            </tbody>

        </table>

    </div>
</section>
</template>



<script>
export default {
    data() {
      return {

      }
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




</style>

