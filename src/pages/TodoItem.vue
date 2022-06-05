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
        :loading="isLoading"
        @click="handleSubmit(formRef)"
      >
        {{ isEdit ? "Edit" : "Create" }}
      </el-button>
      <el-button @click="handleCancel">
        Cancel
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { useRoute, useRouter } from "vue-router";
import useGetTodo from "../hooks/useGetTodo";
import TodoApi from "../../service/todo";
export default {
  setup: function() {
    const router = useRouter();
    const route = useRoute();
    const formRef = ref(null);
    const { handleGetTodo, isLoading, todo } = useGetTodo();
    const form = reactive({
      title: "",
      description: "",
      status: "Not yet",
      date: new Date().toISOString()
    });
    const isEdit = computed(() => {
      if(route.params.id) {
        return true;
      }

      return false;
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
          if(isEdit.value) {
            const result = await TodoApi.update(route.params.id , form);
            if(result.success) {
              ElMessage({
                message: "Edit todo successfully",
                type: "success"
              });

              router.back();
            } else {
              ElMessage({
                message: "Fail to edit todo",
                type: "error"
              });
            }
          } else {
            const result = await TodoApi.create(form);
            if(result.success) {
              ElMessage({
                message: "Create todo successfully",
                type: "success"
              });
              router.back();
            } else {
              ElMessage({
                message: "Fail to create todo",
                type: "error"
              });
            }
          }
          
        } catch (error) {
          if(isEdit.value) {
            ElMessage({
              message: "Fail to edit todo",
              type: "error"
            });
          } else {
            ElMessage({
              message: "Fail to create todo",
              type: "error"
            });
          }
        }
      });
    };

    const handleMounted = () => {
      const { params } = route;
      if(params.id) {
        handleGetTodo(params.id).then(() => {
          console.log("todo", todo);
          form.title = todo.value.title;
          form.description = todo.value.description;
          form.status = todo.value.status;
          form.date = todo.value.date;
        });
      }
    };

    const handleCancel = () => {
      router.push("/");
    };

    onMounted(() => {
       handleMounted();
    });

    return { 
      form,
      rules,
      formRef,
      isLoading,
      handleSubmit,
      handleCancel,
      isEdit
    };
  }
};
</script>

<style>
</style>