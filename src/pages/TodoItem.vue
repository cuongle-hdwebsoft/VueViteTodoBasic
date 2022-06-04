<template>
  <h1>Todo Detail</h1>
  <el-form
    ref="formRef"
    :model="form"
    :rules="rules"
    label-position="left"
    label-width="120px"
  >
    <el-form-item
      label="Title"
      prop="title"
    >
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item
      label="Description"
      prop="description"
    >
      <el-input
        v-model="form.description"
        type="textarea"
      />
    </el-form-item>
    <el-form-item label="Status">
      <el-select v-model="form.status">
        <el-option value="Done" />
        <el-option value="Not yet" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="handleSubmit(formRef)"
      >
        Create
      </el-button>
      <el-button @click="handleCancel">
        Cancel
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "../../service/instance";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
export default {
  setup: function() {
    const router = useRouter();
    const formRef = ref(null);
    const form = reactive({
      title: "",
      description: "",
      status: "Not yet"
    });

    const rules = reactive({
      title: [
        {
          type: "string",
          required: true,
          message: "Please enter title",
          trigger: "change"
        },
      ],
      description: {
        type: "string",
        required: true, message: "Please enter description",
        trigger: "change"
      }
    });
    
    const handleSubmit = async () => {
      formRef.value.validate(async (valid) => {
        if(!valid) {
          return;
        }

        try {
          const result = await axios({
            method: "POST",
            url: "/todos",
            data: form
          });

          if(result.status === 201) {
            ElMessage({
              message: "Create todo successfully",
              type: "success"
            });
          }
        } catch (error) {
          ElMessage({
              message: "Create todo successfully",
              type: "error"
            });
        }
      });
    };

    const handleCancel = () => {
      router.push("/");
    };

    return { 
      form,
      rules,
      formRef,
      handleSubmit,
      handleCancel
    };
  }
};
</script>

<style>
</style>