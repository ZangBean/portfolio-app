import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserAction,
  updateUserAction,
} from "../stores/screens/user/user.action";
import moment from "moment";
import { message } from "antd";
import { useEffect } from "react";

const useAddUserForm = (onClose, user, isEditMode = false) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      name: "",
      position: "",
      image: "",
      birth_date: null,
      gender: "",
      email: "",
      phone: "",
      github: "",
      location: "",
      github_image: "",
      skills: {
        frontend: [],
        backend: [],
        database: [],
        other: [],
      },
      languages: [],
      target: "",
      education: {
        institution: "",
        faculty: "",
        major: "",
        period: { start: null, end: null },
      },
      experience: {
        company: "",
        website: "",
        period: { start: null, end: null },
        description: [],
        years_of_experience: 0,
      },
      projects: [],
      projects_completed: 0,
      certifications_awards: 0,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Vui lòng nhập tên đăng nhập"),
      password: isEditMode
        ? Yup.string().optional()
        : Yup.string().required("Vui lòng nhập mật khẩu"),
      email: Yup.string().email("Vui lòng nhập email hợp lệ").optional(),
    }),
    onSubmit: async (values) => {
      const formattedValues = {
        username: values.username,
        password: values.password || undefined,
        cv: {
          personal_info: {
            name: values.name || undefined,
            position: values.position || undefined,
            image: values.image || undefined,
            birth_date: values.birth_date
              ? moment(values.birth_date).format("DD/MM/YY")
              : undefined,
            gender: values.gender || undefined,
            phone: values.phone || undefined,
            email: values.email || undefined,
            github: values.github || undefined,
            location: values.location || undefined,
            github_image: values.github_image || undefined,
          },
          skills: values.skills || undefined,
          languages: values.languages.length > 0 ? values.languages : undefined,
          target: values.target || undefined,
          education: values.education.institution
            ? {
                institution: values.education.institution || undefined,
                period: values.education.period.start
                  ? {
                      start: moment(values.education.period.start).format(
                        "MMMM YYYY"
                      ),
                      end: values.education.period.end
                        ? moment(values.education.period.end).format(
                            "MMMM YYYY"
                          )
                        : undefined,
                    }
                  : undefined,
                faculty: values.education.faculty || undefined,
                major: values.education.major || undefined,
              }
            : undefined,
          experience: values.experience.company
            ? {
                company: values.experience.company || undefined,
                website: values.experience.website || undefined,
                period: values.experience.period.start
                  ? {
                      start: moment(values.experience.period.start).format(
                        "MMMM YYYY"
                      ),
                      end: values.experience.period.end
                        ? moment(values.experience.period.end).format(
                            "MMMM YYYY"
                          )
                        : undefined,
                    }
                  : undefined,
                description: values.experience.description || undefined,
                years_of_experience:
                  values.experience.years_of_experience || undefined,
              }
            : undefined,
          projects:
            values.projects.length > 0
              ? values.projects.map((project) => ({
                  title: project.title || undefined,
                  period: project.period?.start
                    ? {
                        start: moment(project.period.start).format("MMMM YYYY"),
                        end: project.period.end
                          ? moment(project.period.end).format("MMMM YYYY")
                          : undefined,
                      }
                    : undefined,
                  languages: project.languages || undefined,
                  frameworks: project.frameworks || undefined,
                  database: project.database || undefined,
                  description: project.description || undefined,
                  main_functions: project.main_functions || undefined,
                  image: project.image || undefined,
                }))
              : undefined,
          projects_completed: values.projects_completed || undefined,
          certifications_awards: values.certifications_awards || undefined,
        },
      };

      console.log(
        "Formatted values:",
        JSON.stringify(formattedValues, null, 2)
      );

      try {
        if (isEditMode && user && user.id) {
          await dispatch(
            updateUserAction({ id: user.id, data: formattedValues })
          ).unwrap();
          message.success("Cập nhật user thành công!");
        } else {
          await dispatch(createUserAction(formattedValues)).unwrap();
          message.success("Thêm user thành công!");
        }
        formik.resetForm();
        onClose();
      } catch (err) {
        message.error(
          err || (isEditMode ? "Cập nhật thất bại!" : "Thêm user thất bại!")
        );
        console.error("Submit error:", err);
      }
    },
  });

  useEffect(() => {
    if (isEditMode && user && user.id) {
      formik.setValues({
        username: user.username || "",
        password: user.password || "",
        name: user.cv?.personal_info?.name || "",
        position: user.cv?.personal_info?.position || "",
        image: user.cv?.personal_info?.image || "",
        birth_date: user.cv?.personal_info?.birth_date
          ? moment(user.cv.personal_info.birth_date, "DD/MM/YY").toDate()
          : null,
        gender: user.cv?.personal_info?.gender || "",
        email: user.cv?.personal_info?.email || "",
        phone: user.cv?.personal_info?.phone || "",
        github: user.cv?.personal_info?.github || "",
        location: user.cv?.personal_info?.location || "",
        github_image: user.cv?.personal_info?.github_image || "",
        skills: user.cv?.skills || {
          frontend: [],
          backend: [],
          database: [],
          other: [],
        },
        languages: user.cv?.languages || [],
        target: user.cv?.target || "",
        education: user.cv?.education || {
          institution: "",
          faculty: "",
          major: "",
          period: { start: null, end: null },
        },
        experience: user.cv?.experience || {
          company: "",
          website: "",
          period: { start: null, end: null },
          description: [],
          years_of_experience: 0,
        },
        projects:
          user.cv?.projects?.map((project) => ({
            title: project.title || "",
            period: {
              start: project.period?.start
                ? moment(project.period.start, "MMMM YYYY").toDate()
                : null,
              end: project.period?.end
                ? moment(project.period.end, "MMMM YYYY").toDate()
                : null,
            },
            languages: project.languages || [],
            frameworks: project.frameworks || [],
            database: project.database || "",
            description: project.description || "",
            main_functions: project.main_functions || [],
            image: project.image || "",
          })) || [],
        projects_completed: user.cv?.projects_completed || 0,
        certifications_awards: user.cv?.certifications_awards || 0,
      });
    } else {
      formik.resetForm();
    }
  }, [user, isEditMode]);

  const handleAddLanguage = () => {
    formik.setFieldValue("languages", [
      ...formik.values.languages,
      { language: "", level: "" },
    ]);
  };

  const handleRemoveLanguage = (index) => {
    const newLanguages = formik.values.languages.filter((_, i) => i !== index);
    formik.setFieldValue("languages", newLanguages);
  };

  const handleAddProject = () => {
    formik.setFieldValue("projects", [
      ...formik.values.projects,
      {
        title: "",
        period: { start: null, end: null },
        languages: [],
        frameworks: [],
        database: "",
        description: "",
        main_functions: [],
        image: "",
      },
    ]);
  };

  const handleRemoveProject = (index) => {
    const newProjects = formik.values.projects.filter((_, i) => i !== index);
    formik.setFieldValue("projects", newProjects);
  };

  return {
    formik,
    handleAddLanguage,
    handleRemoveLanguage,
    handleAddProject,
    handleRemoveProject,
    loading,
  };
};

export default useAddUserForm;
