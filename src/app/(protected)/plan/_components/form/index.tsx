"use client";

import { useEffect } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { CategoryFormProps } from "./types";
import { Create, Edit, SaveButton } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoriesCreateSchema } from "./schemas";
import {
  BaseRecord,
  HttpError,
  useCreate,
  useNotification,
  useOne,
  useUpdate,
} from "@refinedev/core";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  UseFormReturn,
} from "react-hook-form";
import { TextField } from "@app/(protected)/_components/form/form-components";
import { useRouter } from "next/navigation";
import { Category } from "@generated/prisma/client";
import defaultValues from "./default-values";
import { usePlanList } from "../../_hooks/use-plan-list";

export default function CategoryForm<
  TRecord extends BaseRecord = BaseRecord,
  TVariables extends FieldValues = FieldValues,
>({ action, id, isModal }: CategoryFormProps) {
  const { planAreFetching, planData } = usePlanList();
  const { open } = useNotification();
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const {
    query: { data: categoryData },
  } = useOne<Category, HttpError>({
    resource: "categories",
    id,
  });

  const form = useForm<TRecord, HttpError, TVariables>({
    refineCoreProps: {
      resource: "categories",
      action,
      id,
      queryOptions: {
        enabled: false,
      },
    },
    resolver: zodResolver(categoriesCreateSchema as any),
    defaultValues: defaultValues as DefaultValues<TVariables>,
    mode: "onChange",
  });

  const { mutateAsync: createCategory } = useCreate<Category>({
    successNotification: false,
    errorNotification: false,
  });
  const { mutateAsync: updateCategory } = useUpdate<Category>({
    successNotification: false,
    errorNotification: false,
  });

  const handleOnSubmit = async (values: TVariables) => {
    try {
      const categoryData = {
        updatedAt: new Date(),
      };

      if (action === "create") {
        await createCategory({
          resource: "categories",
          values: { ...categoryData, name: values.name, planId: planData.id },
        });
      }

      if (action === "edit") {
        await updateCategory({
          id,
          resource: "categories",
          values: { ...categoryData, name: values.name, updatedAt: new Date() },
        });
      }

      open?.({
        type: "success",
        message: `category ${
          action === "create" ? "created" : "updated"
        } successfully`,
        description: `${
          action === "create"
            ? "Category has been created"
            : "Category has been updated"
        }`,
      });

      handleClose();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      open?.({
        type: "error",
        message: "Submission failed",
        description: errorMessage,
      });
    }
  };

  const {
    refineCore: { formLoading },
    saveButtonProps,
    handleSubmit,
    reset,
  } = form as UseFormReturn & typeof form;

  useEffect(() => {
    if (categoryData?.data) {
      reset({
        name: categoryData?.data.name || "",
      });
    }
  }, [categoryData, reset]);

  const Wrapper = action === "create" ? Create : Edit;
  const title = action === "create" ? "Create new category" : "Edit category";

  const footerButtons = (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button variant="outlined" onClick={handleClose}>
        Cancel
      </Button>
      <SaveButton
        {...saveButtonProps}
        startIcon={null}
        onClick={handleSubmit(handleOnSubmit)}
      >
        {action === "create" ? "Create category" : "Save"}
      </SaveButton>
    </Box>
  );

  return (
    <FormProvider {...(form as unknown as UseFormReturn<TVariables>)}>
      <Wrapper
        title={isModal ? false : <Typography variant="h5">{title}</Typography>}
        breadcrumb={isModal ? null : undefined}
        goBack={isModal ? null : undefined}
        isLoading={formLoading}
        saveButtonProps={undefined as any}
        headerButtons={<></>}
        footerButtons={footerButtons}
      >
        <Box
          component="form"
          autoComplete="off"
          onSubmit={handleSubmit(handleOnSubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {planAreFetching ? (
            <CircularProgress />
          ) : (
            <TextField name="name" label="Name" required />
          )}
        </Box>
      </Wrapper>
    </FormProvider>
  );
}
